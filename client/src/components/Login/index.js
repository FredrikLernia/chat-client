import React, { useState, useContext } from 'react'
import './style.scss'

import UserContext from '../../context/UserContext'

import Button from '../Button'

const Login = ({ changePage }) => {
  const { setUser } = useContext(UserContext)

  const [inputs, setInputs] = useState({ username: '', password: '' })

  const onInputChange = e => setInputs({ ...inputs, [e.target.id]: e.target.value })

  const onLoginSubmit = async e => {
    e.preventDefault()
    
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
    <form className="Login" onSubmit={onLoginSubmit}>
      <h1>Logga in</h1>
      <label htmlFor="username">Användarnamn</label>
      <input type="text" id="username" value={inputs.username} onChange={onInputChange} />
      <label htmlFor="password">Lösenord</label>
      <input type="password" id="password" value={inputs.password} onChange={onInputChange} />
      <Button type="submit" color="blue">Logga in</Button>
      <p>Har du inget konto? <span onClick={() => changePage('sign-up')}>Registrera här!</span></p>
    </form>
  )
}

export default Login