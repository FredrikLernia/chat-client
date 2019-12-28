import React, { useContext } from 'react'
import { X } from 'react-feather'
import './style.scss'

import PageContext from '../../context/PageContext'

const ChatHeader = () => {
  const { friend, setFriend } = useContext(PageContext)
  const { online, firstName, lastName } = friend

  return (
    <div className="ChatHeader">
      <h2>{online ? <span /> : ''}{firstName + ' ' + lastName}</h2>
      <X onClick={() => setFriend(null)} />
    </div>
  )
}

export default ChatHeader