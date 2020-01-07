import React, { useEffect } from 'react'
import { formatTime } from '../../functions/date'
import './style.scss'

import Avatar from '../Avatar'

const Message = props => {
  const {
    userId,
    userInitials,
    friendInitials,
    userColor,
    friendColor,
    message,
    nextMessageFrom,
    scrollToBottom
  } = props
  const { date, text, from } = message

  useEffect(() => {
    scrollToBottom()
  })

  let time = formatTime(date)

  const sent = from === userId

  if (sent) {
    return (
      <div className="Message right">
        <div className="margin" />
        <div className="content">
          <p className="time">{time}</p>
          <p className="text sent">{text}</p>
        </div>
        {nextMessageFrom !== from ?
          <Avatar size="sm" color={userColor} initials={userInitials} />
          :
          <Avatar size="sm" display="none" />
        }
      </div>
    )
  }

  return (
    <div className="Message left">
      {nextMessageFrom !== from ?
        <Avatar size="sm" color={friendColor} initials={friendInitials} />
        :
        <Avatar size="sm" display="none" />
      }
      <div className="content">
        <p className="time">{time}</p>
        <p className="text">{text}</p>
      </div>
      <div className="margin" />
    </div>
  )
}

export default Message