import React, { useContext } from 'react'
import './style.scss'

import UserContext from '../../context/UserContext'

import ChatListItem from '../ChatListItem'

const ChatList = () => {
  const { user } = useContext(UserContext)

  return (
    <div className="ChatList">
      {user.friendships.length ?
        user.friendships.map((friendship, i) => {
          if (friendship.messages.length) {
            return <ChatListItem key={i} friendship={friendship} />
          }

          return null
        })
        : <p className="no-chats">You don't have any chats yet...</p>}
    </div>
  )
}

export default ChatList