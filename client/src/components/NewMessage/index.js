import React from 'react'
import { Send } from 'react-feather'
import './style.scss'

import Avatar from '../Avatar'

const user = require('../../json/user.json')

const NewMessage = () => {
  const { firstName, lastName, colorTheme } = user

  const onSubmit = e => {
    console.log('submit')
  }

  return (
    <>
      <div className="typing">Kajsa is typing<span>.</span><span>.</span><span>.</span></div>
      <div className="NewMessage">
        <Avatar size="lg" initials={firstName[0] + lastName[0]} color={colorTheme} />
        <form onSubmit={onSubmit}>
          <textarea rows="4" placeholder="Type a message..." />
          <button type="submit">Send<Send /></button>
        </form>
      </div>
    </>
  )
}

export default NewMessage