import React, { useState, useContext } from 'react'
import './style.scss'

import UserContext from '../../context/UserContext'

const Login = ({ changePage }) => {
  const { setUser } = useContext(UserContext)

  const [inputs, setInputs] = useState({ username: '', password: '' })

  const onInputChange = e => setInputs({ ...inputs, [e.target.id]: e.target.value })

  const onSubmit = async () => {
    const loggedInRaw = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const loggedIn = await loggedInRaw.json()

    if (typeof loggedIn === 'object') {
      setUser(loggedIn)
    }
    else {
      console.log('Not logged in')
    }
  }

  return (
    <div className="Login">
      <h1>Logga in</h1>
      <label htmlFor="username">Användarnamn</label>
      <input type="text" id="username" value={inputs.username} onChange={onInputChange} />
      <label htmlFor="password">Lösenord</label>
      <input type="password" id="password" value={inputs.password} onChange={onInputChange} />
      <button className="bg-blue" onClick={onSubmit}>Logga in</button>
      <p>Har du inget konto? <span onClick={() => changePage('sign-up')}>Registrera här!</span></p>
    </div>
  )
}

export default Login