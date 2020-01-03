import React, { useContext } from 'react'
import { X } from 'react-feather'
import './style.scss'

import PageContext from '../../context/PageContext'

import OnlineSymbol from '../OnlineSymbol'

const ChatHeader = () => {
  const { pageFriendship, setPageFriendship } = useContext(PageContext)
  const { online, firstName, lastName } = pageFriendship.friend

  return (
    <div className="ChatHeader">
      <h2>{online ? <OnlineSymbol margin="right" /> : ''}{firstName + ' ' + lastName}</h2>
      <X onClick={() => setPageFriendship(null)} />
    </div>
  )
}

export default ChatHeader