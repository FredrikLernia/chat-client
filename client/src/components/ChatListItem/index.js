import React, { useContext } from 'react'
import { formatDate, formatTime } from '../../functions/date'
import './style.scss'

import PageContext from '../../context/PageContext'

import Avatar from '../Avatar'
import OnlineSymbol from '../OnlineSymbol'

const ChatListItem = props => {
  const { pageFriendship, setPageFriendship } = useContext(PageContext)

  const { _id, friend, messages } = props.friendship
  const { firstName, lastName, colorTheme, online } = friend
  const message = [...messages].pop()

  const day = formatDate(message.date)
  const time = formatTime(message.date)

  return (
    <div className={pageFriendship && pageFriendship === _id ? 'ChatListItem active' : 'ChatListItem'} onClick={() => setPageFriendship(props.friendship._id)}>
      <Avatar size="md" color={colorTheme} initials={firstName[0] + lastName[0]} />
      <div className="content">
        <h5>{firstName + ' ' + lastName}{online ? <OnlineSymbol margin="left" /> : ''}</h5>
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