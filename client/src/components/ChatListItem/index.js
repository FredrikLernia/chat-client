import React, { useContext } from 'react'
import './style.scss'

import PageContext from '../../context/PageContext'

import Avatar from '../Avatar'
import OnlineSymbol from '../OnlineSymbol'

const ChatListItem = props => {
  const { pageFriendship, setPageFriendship } = useContext(PageContext)

  const { _id, friend, messages } = props.friendship
  const { firstName, lastName, colorTheme, online } = friend
  const message = [...messages].pop()

  return (
    <div className={pageFriendship && pageFriendship._id === _id ? 'ChatListItem active' : 'ChatListItem'} onClick={() => setPageFriendship(props.friendship)}>
      <Avatar size="md" color={colorTheme} initials={firstName[0] + lastName[0]} />
      <div className="content">
        <h4>{firstName + ' ' + lastName}{online ? <OnlineSymbol margin="left" /> : ''}</h4>
        {message ?
          <>
            <p className="text">{message.text}</p>
            <p className="time">{message.date}</p>
          </>
          : ''}
      </div>
    </div>
  )
}

export default ChatListItem