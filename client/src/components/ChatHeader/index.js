import React, { useContext } from 'react'
import { X } from 'react-feather'
import './style.scss'

import UserContext from '../../context/UserContext'
import PageContext from '../../context/PageContext'

import OnlineSymbol from '../OnlineSymbol'

const ChatHeader = () => {
  const { user } = useContext(UserContext)
  const { page, setPage } = useContext(PageContext)

  const { online, firstName, lastName } = user.friendships.find(friendship => friendship._id === page.friendship).friend

  return (
    <div className="ChatHeader">
      {online ? <OnlineSymbol /> : ''}
      <div className="name">
      <h2>{firstName + ' ' + lastName}</h2>
      </div>
      <X onClick={() => setPage({ ...page, friendship: null })} />
    </div>
  )
}

export default ChatHeader