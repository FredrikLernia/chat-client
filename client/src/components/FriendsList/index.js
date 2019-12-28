import React, { useContext } from 'react'

import UserContext from '../../context/UserContext'

import Friend from '../Friend/index.js'

const FriendsList = () => {
  const { user } = useContext(UserContext)

  return (
    <div className="FriendsList">
      {user.friends.map((friend, i) => <Friend key={i} friend={friend} />)}
    </div>
  )
}

export default FriendsList