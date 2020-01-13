import React, { useContext, useRef, useEffect } from 'react'
import { isSameDay, formatDate } from '../../functions/date'
import './style.scss'

import UserContext from '../../context/UserContext'
import PageContext from '../../context/PageContext'

import Message from '../Message'

const Messages = () => {
  const { user } = useContext(UserContext)
  const { pageFriendship } = useContext(PageContext)
  const window = useRef()

  const scrollToBottom = () => {
    const scrollY = window.current.scrollHeight - window.current.clientHeight
    window.current.scrollTo(0, scrollY)
  }

  const { friend, messages } = user.friendships.find(friendship => friendship._id === pageFriendship)

  const userInitials = user.firstName[0] + user.lastName[0]
  const friendInitials = friend.firstName[0] + friend.lastName[0]

  useEffect(() => {
    scrollToBottom()
  }, [pageFriendship])

  return (
    <div className="Messages" ref={window}>
      {messages.map((message, i) => {
        const sent = message.from === user._id
        const date = formatDate(message.date)

        const prevMessage = i && messages[i - 1]
        const nextMessage = messages.length > (i + 1) && messages[i + 1]

        let separator = ''
        if (!isSameDay(prevMessage.date, message.date)) {
          separator = <div className="separator">{date}</div>
        }

        let placement
        if (
          (!isSameDay(prevMessage.date, message.date) && !isSameDay(message.date, nextMessage.date)) ||
          (prevMessage.from !== message.from && message.from !== nextMessage.from)
        ) {
          placement = 'alone'
        }
        else if (prevMessage.from !== message.from || separator) {
          placement = 'first'
        }
        else if (message.from !== nextMessage.from || !isSameDay(message.date, nextMessage.date)) {
          placement = 'last'
        }
        else {
          placement = 'middle'
        }

        return (
          <div key={i}>
            {separator}
            <Message
              sent={sent}
              message={message}
              placement={placement}
              initials={sent ? userInitials : friendInitials}
              color={sent ? user.colorTheme : friend.colorTheme}
            />
          </div>
        )
      })}
      <div className="gradient" />
    </div>
  )
}

export default Messages