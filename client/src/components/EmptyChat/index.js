import React from 'react'
import { MessageSquare } from 'react-feather'
import './style.scss'

const EmptyChat = () => {
  return (
    <div className="EmptyChat">
      <div>
        <MessageSquare />
        <p>No chat selected</p>
      </div>
    </div>
  )
}

export default EmptyChat