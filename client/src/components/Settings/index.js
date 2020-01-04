import React, { useState, useContext } from 'react'
import './style.scss'

import UserContext from '../../context/UserContext'

import ColorPicker from '../ColorPicker'

const Settings = () => {
  const { user } = useContext(UserContext)
  const { username, firstName, lastName, colorTheme } = user

  const [inputs, setInputs] = useState({ username, firstName, lastName, colorTheme })

  const onInputChange = e => setInputs({ ...inputs, [e.target.id]: e.target.value })

  const onColorChange = color => setInputs({ ...inputs, colorTheme: color })

  const onUpdateClick = () => console.log(inputs)

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
        <button className={`update-account bg-${colorTheme}`} onClick={onUpdateClick}>Uppdatera konto</button>
      </div>
      <div className="password form">
        <h4>Nytt lösenord</h4>
        <input type="password" id="old-password" className={`shadow-${user.colorTheme}`} placeholder="Nuvarande lösenord" />
        <input type="password" id="new-password" className={`shadow-${user.colorTheme}`} placeholder="Nytt lösenord" />
        <button className={`bg-${colorTheme}`}>Ändra lösenord</button>
      </div>
      <div className="delete form">
        <button>Ta bort konto</button>
      </div>
    </div>
  )
}

export default Settings