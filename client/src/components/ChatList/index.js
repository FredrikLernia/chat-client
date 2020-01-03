import React, { useContext } from 'react'
import './style.scss'

import UserContext from '../../context/UserContext'

import ChatListItem from '../ChatListItem'

const ChatList = () => {
  const { user } = useContext(UserContext)

  return (
    <div className="ChatList">
      {user.friendships.map((friendship, i) => <ChatListItem key={i} friendship={friendship} />)}
    </div>
  )
}

export default ChatList