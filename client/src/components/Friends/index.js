import React from 'react'

import NewFriend from '../NewFriend'
import FriendsList from '../FriendsList'

const Friends = () => {
  return (
    <div className="Friends">
      <NewFriend />
      <FriendsList />
    </div>
  )
}

export default Friends