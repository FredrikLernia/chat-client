import React, { useContext } from 'react'
import { formatDate, formatTime } from '../../functions/date'
import './style.scss'

import PageContext from '../../context/PageContext'

import Avatar from '../Avatar'
import OnlineSymbol from '../OnlineSymbol'

const ChatListItem = props => {
  const { page, setPage } = useContext(PageContext)

  const { _id, friend, messages } = props.friendship
  const { firstName, lastName, colorTheme, online } = friend
  const message = [...messages].pop()

  const day = formatDate(message.date)
  const time = formatTime(message.date)

  return (
    <div className={page.friendship && page.friendship === _id ? 'ChatListItem active' : 'ChatListItem'} onClick={() => setPage({ ...page, friendship: props.friendship._id })}>
      <Avatar size="md" color={colorTheme} initials={firstName[0] + lastName[0]} />
      <div className="content">
        <div className="header">
          <h5>{firstName + ' ' + lastName}</h5>
          {online ? <OnlineSymbol margin="left" /> : ''}
        </div>
        {message ?
          <>
            <p className="text">{message.text}</p>
            <p className="time">{day + ' ' + time}</p>
          </>
          : ''}
      </div>
    </div>
  )
}

export default ChatListItem