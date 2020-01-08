import React, { useState, useContext, useRef } from 'react'
import './style.scss'

import useSetUser from '../../functions/useSetUser'

import UserContext from '../../context/UserContext'
import PageContext from '../../context/PageContext'

import ColorPicker from '../ColorPicker'

const Settings = () => {
  const { updateUser } = useSetUser()

  const { user } = useContext(UserContext)
  const { username, firstName, lastName, colorTheme } = user

  const { setInfoBox } = useContext(PageContext)

  const [inputs, setInputs] = useState({ username, firstName, lastName, colorTheme })
  const currentPassword = useRef()
  const newPassword = useRef()

  const onInputChange = e => setInputs({ ...inputs, [e.target.id]: e.target.value })

  const onColorChange = color => setInputs({ ...inputs, colorTheme: color })

  const onUpdateClick = async () => {
    const userRaw = await fetch('/api/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs)
    })
    const updatedUser = await userRaw.json()

    if (updatedUser.errors) {
      return
    }

    updateUser()
    setInfoBox({ open: true, page: 'settings', text: 'Din profil har uppdaterats!' })
  }

  const onPasswordClick = async () => {
    const userRaw = await fetch('/api/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currentPassword: currentPassword.current.value,
        newPassword: newPassword.current.value
      })
    })
    const updatedUser = await userRaw.json()

    if (updatedUser.errors || typeof updatedUser === 'string') {
      return
    }

    setInfoBox({ open: true, page: 'settings', text: 'Ditt lösenord har uppdaterats!' })
    currentPassword.current.value = ''
    newPassword.current.value = ''
  }

  return (
    <div className="Settings">
      <div className="user form">
        <label htmlFor="username">Användarnamn</label>
        <input type="text" id="username" className={`shadow-${user.colorTheme}`} value={inputs.username} onChange={onInputChange} />
        <label htmlFor="firstName">Förnamn</label>
        <input type="text" id="firstName" className={`shadow-${user.colorTheme}`} value={inputs.firstName} onChange={onInputChange} />
        <label htmlFor="lastName">Efternamn</label>
        <input type="text" id="lastName" className={`shadow-${user.colorTheme}`} value={inputs.lastName} onChange={onInputChange} />
        <ColorPicker color={inputs.colorTheme} changeColor={onColorChange} />
        <button className={`update-account bg-${colorTheme}`} onClick={onUpdateClick}>Uppdatera profil</button>
      </div>
      <div className="password form">
        <h4>Nytt lösenord</h4>
        <input type="password" ref={currentPassword} className={`shadow-${user.colorTheme}`} placeholder="Nuvarande lösenord" />
        <input type="password" ref={newPassword} className={`shadow-${user.colorTheme}`} placeholder="Nytt lösenord" />
        <button className={`bg-${colorTheme}`} onClick={onPasswordClick}>Ändra lösenord</button>
      </div>
      <div className="delete form">
        <button>Ta bort konto</button>
      </div>
    </div>
  )
}

export default Settings