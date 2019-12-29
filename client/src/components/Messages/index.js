import React, { useContext, useRef } from 'react'
import './style.scss'

import UserContext from '../../context/UserContext'
import PageContext from '../../context/PageContext'

import Message from '../Message'

const Messages = () => {
  const window = useRef()

  const scrollToBottom = () => {
    const scrollY = window.current.scrollHeight - window.current.clientHeight
    window.current.scrollTo(0, scrollY)
  }

  const { user } = useContext(UserContext)
  const { friend } = useContext(PageContext)

  const userInitials = user.firstName[0] + user.lastName[0]
  const friendInitials = friend.firstName[0] + friend.lastName[0]

  return (
    <div className="Messages" ref={window}>
      {friend.messages.map((message, i) => (
        <Message
          key={i}
          userInitials={userInitials}
          friendInitials={friendInitials}
          userColor={user.colorTheme}
          friendColor={friend.colorTheme}
          message={message}
          scrollToBottom={scrollToBottom}
        />
      ))}
      <div className="gradient" />
    </div>
  )
}

export default Messages