import React, { useContext } from 'react'
import './style.scss'

import UserContext from '../../context/UserContext'

import ChatListItem from '../ChatListItem'

const ChatList = () => {
  const { user } = useContext(UserContext)
  let { friendships } = user
  friendships = [...friendships].filter(friendship => friendship.messages.length)

  const chats = []

  friendships
    .sort((a, b) => {
      const aDate = new Date(a.messages[a.messages.length - 1].date).getTime()
      const bDate = new Date(b.messages[b.messages.length - 1].date).getTime()
      return bDate - aDate
    })
    .forEach((friendship, i) => {
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