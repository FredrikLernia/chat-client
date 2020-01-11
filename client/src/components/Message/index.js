import React, { useEffect } from 'react'
import { formatTime } from '../../functions/date'
import './style.scss'

import Avatar from '../Avatar'

const Message = props => {
  const { sent, message, placement, initials, color, scrollToBottom } = props
  const { date, text } = message

  useEffect(() => {
    scrollToBottom()
  }, [scrollToBottom])

  const time = formatTime(date)

  return (
    <div className={`Message ${sent ? 'right' : 'left'} ${placement}`}>
      {placement === 'last' || placement === 'alone' ?
          <Avatar size="sm" color={color} initials={initials} />
          : <Avatar size="sm" display="none" />}
      <p className="text">{text}</p>
      <p className="time">{time}</p>
    </div>
  )
}

export default Message