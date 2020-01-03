import React, { useContext } from 'react'
import './style.scss'

import PageContext from '../../context/PageContext'

import ChatWindow from '../ChatWindow'
import EmptyChat from '../EmptyChat'

const Main = () => {
  const { pageFriendship } = useContext(PageContext)

  return (
    <div className="Main">
      {pageFriendship ? <ChatWindow /> : <EmptyChat />}
    </div>
  )
}

export default Main