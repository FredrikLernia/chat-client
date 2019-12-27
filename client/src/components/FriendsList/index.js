import React from 'react'

import Friend from '../Friend/index.js'

const { friends } = require('../../json/user.json')

const FriendsList = () => {
  return (
    <div className="FriendsList">
      {friends.map((friend, i) => (
        <Friend key={i} friend={friend} />
      ))}
    </div>
  )
}

export default FriendsList