import React from 'react'
import './style.scss'

import ChatHeader from '../ChatHeader'
import Messages from '../Messages'
import NewMessage from '../NewMessage'

const ChatWindow = () => {
  return (
    <div className="ChatWindow">
      <ChatHeader />
      <Messages />
      <NewMessage />
    </div>
  )
}

export default ChatWindow