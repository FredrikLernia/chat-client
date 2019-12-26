import React from 'react'
import './style.scss'

import ChatListItem from '../ChatListItem'

const user = require('../../json/user.json')

const ChatList = () => {
  return (
    <div className="ChatList">
      {user.friends.map((friend, i) => <ChatListItem key={i} friend={friend} />)}
    </div>
  )
}

export default ChatList