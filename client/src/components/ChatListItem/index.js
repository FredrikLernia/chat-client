import React from 'react'
import './style.scss'
import Avatar from '../Avatar'

const ChatListItem = props => {
  const { firstName, lastName, colorTheme, messages } = props.friend
  const { message, time } = messages.pop()

  return (
    <div className="ChatListItem">
      <Avatar size="sm" color={colorTheme} initials={firstName[0] + lastName[0]} />
      <div className="content">
        <h4>{firstName + ' ' + lastName}</h4>
        <p className="message">{message}</p>
        <p className="time">{time}</p>
      </div>
    </div>
  )
}

export default ChatListItem