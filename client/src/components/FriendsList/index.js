import React, { useContext } from 'react'

import UserContext from '../../context/UserContext'

import Friend from '../Friend/index.js'

const FriendsList = () => {
  const { user } = useContext(UserContext)

  return (
    <div className="FriendsList">
      {user.friendships.map((friendship, i) => <Friend key={i} friendship={friendship} />)}
    </div>
  )
}

export default FriendsList