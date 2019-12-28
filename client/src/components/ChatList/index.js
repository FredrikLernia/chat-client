import React, { useContext } from 'react'
import './style.scss'

import UserContext from '../../context/UserContext'

import ChatListItem from '../ChatListItem'

const ChatList = () => {
  const { user } = useContext(UserContext)

  return (
    <div className="ChatList">
      {user.friends.map((friend, i) => <ChatListItem key={i} friend={friend} />)}
    </div>
  )
}

export default ChatList