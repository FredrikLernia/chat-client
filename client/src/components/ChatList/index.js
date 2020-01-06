import React, { useContext } from 'react'
import './style.scss'

import UserContext from '../../context/UserContext'

import ChatListItem from '../ChatListItem'

const ChatList = () => {
  const { user } = useContext(UserContext)

  const chats = []
  
  user.friendships.forEach((friendship, i) => {
    if (friendship.messages.length) {
      chats.push(<ChatListItem key={i} friendship={friendship} />)
    }
  })

  return (
    <div className="ChatList">
      {chats.length ? chats : <p className="no-chats">Du har inga chattar än.</p>}
    </div>
  )
}

export default ChatList