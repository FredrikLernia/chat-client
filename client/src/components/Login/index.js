import React, { useState } from 'react'
import './style.scss'

const Login = ({ changePage }) => {
  const [inputs, setInputs] = useState({ username: '', password: '' })

  const onInputChange = e => setInputs({ ...inputs, [e.target.id]: e.target.value })

  const onSubmit = () => console.log(inputs)

  return (
    <div className="Login">
      <h1>Login</h1>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" value={inputs.username} onChange={onInputChange} />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={inputs.password} onChange={onInputChange} />
      <button className="bg-blue" onClick={onSubmit}>Login</button>
      <p>Don't have an account yet? <span onClick={() => changePage('sign-up')}>Sing up</span></p>
    </div>
  )
}

export default Login