import React, { useContext } from 'react'
import './style.scss'

import UserContext from '../../context/UserContext'

import Friend from '../Friend/index.js'

const FriendsList = () => {
  const { user } = useContext(UserContext)

  return (
    <div className="FriendsList">
      {user.friendships.length ?
        user.friendships.map((friendship, i) => <Friend key={i} friendship={friendship} />)
      : <p className="no-friends">You don't have any friends yet...</p>}
    </div>
  )
}

export default FriendsList