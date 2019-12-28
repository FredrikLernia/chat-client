import React, { useContext } from 'react'
import './style.scss'

import PageContext from '../../context/PageContext'

import Avatar from '../Avatar'

const ChatListItem = props => {
  const { friend, setFriend } = useContext(PageContext)

  const { _id, firstName, lastName, colorTheme, messages } = props.friend
  const { text, time } = [...messages].pop()

  return (
    <div className={friend && friend._id === _id ? 'ChatListItem active' : 'ChatListItem'} onClick={() => setFriend(props.friend)}>
      <Avatar size="md" color={colorTheme} initials={firstName[0] + lastName[0]} />
      <div className="content">
        <h4>{firstName + ' ' + lastName}</h4>
        <p className="text">{text}</p>
        <p className="time">{time}</p>
      </div>
    </div>
  )
}

export default ChatListItem