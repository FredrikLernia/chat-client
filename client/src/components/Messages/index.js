import React from 'react'
import './style.scss'

import Message from '../Message'

const user = require('../../json/user.json')

const Messages = () => {
  const friend = user.friends[1]

  const userInitials = user.firstName[0] + user.lastName[0]
  const friendInitials = friend.firstName[0] + friend.lastName[0]

  return (
    <div className="Messages">
      {friend.messages.map((message, i) => (
        <Message
          key={i}
          userInitials={userInitials}
          friendInitials={friendInitials}
          userColor={user.colorTheme}
          friendColor={friend.colorTheme}
          message={message}
        />
      ))}
      <div className="gradient" />
    </div>
  )
}

export default Messages