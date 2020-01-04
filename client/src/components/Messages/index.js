import React, { useContext, useRef } from 'react'
import { isSameDay, formatDate } from '../../functions/date'
import './style.scss'

import UserContext from '../../context/UserContext'
import PageContext from '../../context/PageContext'

import Message from '../Message'

const Messages = () => {
  const { user } = useContext(UserContext)
  const { pageFriendship } = useContext(PageContext)
  const { friend } = pageFriendship
  const window = useRef()

  const scrollToBottom = () => {
    const scrollY = window.current.scrollHeight - window.current.clientHeight
    window.current.scrollTo(0, scrollY)
  }

  const userInitials = user.firstName[0] + user.lastName[0]
  const friendInitials = friend.firstName[0] + friend.lastName[0]

  return (
    <div className="Messages" ref={window}>
      {pageFriendship.messages.map((message, i) => {
        const time = formatDate(message.date)
        
        return (
          <div key={i}>
            {!i ? <div className="separator">{time}</div>
              : i > 0 && !isSameDay(message.date, pageFriendship.messages[i - 1].date) ?
                <div className="separator">{time}</div>
                : ''}
            <Message
              userId={user._id}
              userInitials={userInitials}
              friendInitials={friendInitials}
              userColor={user.colorTheme}
              friendColor={friend.colorTheme}
              message={message}
              scrollToBottom={scrollToBottom}
            />
          </div>
        )
      })}
      <div className="gradient" />
    </div>
  )
}

export default Messages