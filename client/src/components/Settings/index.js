import React, { useState, useContext } from 'react'
import './style.scss'

import UserContext from '../../context/UserContext'

const Settings = () => {
  const { user } = useContext(UserContext)
  const { username, firstName, lastName } = user

  const [inputs, setInputs] = useState({ username, firstName, lastName })

  const onInputChange = e => setInputs({ ...inputs, [e.target.id]: e.target.value })

  return (
    <div className="Settings">
      <div className="user form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={inputs.username} onChange={onInputChange} />
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" value={inputs.firstName} onChange={onInputChange} />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" value={inputs.lastName} onChange={onInputChange} />
        <label htmlFor="colorTheme">Color Theme</label>
        <select></select>
        <button>Update Account</button>
      </div>
      <div className="password form">
        <h4>Change Password</h4>
        <input type="password" id="old-password" placeholder="Old Password" />
        <input type="password" id="new-password" placeholder="New Password" />
        <button>Update Password</button>
      </div>
      <div className="delete form">
        <button>Delete Account</button>
      </div>
    </div>
  )
}

export default Settings