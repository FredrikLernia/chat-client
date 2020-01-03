import React, { useEffect } from 'react'
import './style.scss'

import Avatar from '../Avatar'

const Message = props => {
  const { userId, userInitials, friendInitials, userColor, friendColor, message, scrollToBottom } = props
  const { time, text, from } = message

  useEffect(() => {
    scrollToBottom()
  })

  const sent = from === userId

  if (sent) {
    return (
      <div className="Message right">
        <div className="margin" />
        <div className="content">
          <p className="time">{time}</p>
          <p className="text sent">{text}</p>
        </div>
        <Avatar size="sm" color={userColor} initials={userInitials} />
      </div>
    )
  }

  return (
    <div className="Message left">
      <Avatar size="sm" color={friendColor} initials={friendInitials} />
      <div className="content">
        <p className="time">{time}</p>
        <p className="text">{text}</p>
      </div>
      <div className="margin" />
    </div>
  )
}

export default Message