import React, { useState } from 'react'
import './style.scss'

import ColorPicker from '../ColorPicker'
import Button from '../Button'

const SignUp = ({ changePage, setCreated }) => {
  const [inputs, setInputs] = useState({ username: '', firstName: '', lastName: '', colorTheme: 'blue', password: '' })

  const onInputChange = e => setInputs({ ...inputs, [e.target.id]: e.target.value })

  const onColorChange = color => setInputs({ ...inputs, colorTheme: color })

  const onSubmit = async () => {
    const userRaw = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs)
    })
    const createdUser = await userRaw.json()

    if (createdUser.errors || createdUser.errmsg) {
      return
    }

    setCreated(true)
    changePage('login')
  }

  return (
    <div className="SignUp">
      <h1>Registrera</h1>
      <label htmlFor="username">Användarnamn</label>
      <input type="text" id="username" value={inputs.username} onChange={onInputChange} />
      <label htmlFor="firstName">Förnamn</label>
      <input type="text" id="firstName" value={inputs.firstName} onChange={onInputChange} />
      <label htmlFor="lastName">Efternamn</label>
      <input type="text" id="lastName" value={inputs.lastName} onChange={onInputChange} />
      <ColorPicker color={inputs.colorTheme} changeColor={onColorChange} />
      <label htmlFor="password">Lösenord</label>
      <input type="password" id="password" value={inputs.password} onChange={onInputChange} />
      <Button color="blue" onClick={onSubmit}>Registrera</Button>
      <p>Har du redan ett konto? <span onClick={() => changePage('login')}>Logga in</span></p>
    </div>
  )
}

export default SignUp