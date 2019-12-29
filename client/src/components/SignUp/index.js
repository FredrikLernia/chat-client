import React, { useState } from 'react'
import './style.scss'

import ColorPicker from '../ColorPicker'

const SignUp = ({ changePage }) => {
  const [inputs, setInputs] = useState({ username: '', firstName: '', lastName: '', password: '' })

  const onInputChange = e => setInputs({ ...inputs, [e.target.id]: e.target.value })

  const onSubmit = () => console.log(inputs)

  return (
    <div className="SignUp">
      <h1>Sign Up</h1>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" value={inputs.username} onChange={onInputChange} />
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" value={inputs.firstName} onChange={onInputChange} />
      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" value={inputs.lastName} onChange={onInputChange} />
      <ColorPicker />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={inputs.password} onChange={onInputChange} />
      <button className="update-account bg-blue" onClick={onSubmit}>Sign Up</button>
      <p>Already have an account? <span onClick={() => changePage('login')}>Login</span></p>
    </div>
  )
}

export default SignUp