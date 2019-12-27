import React from 'react'
import './style.scss'

const Settings = () => {
  return (
    <div className="Settings">
      <div className="user form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />
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