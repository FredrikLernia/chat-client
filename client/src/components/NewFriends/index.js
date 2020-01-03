import React from 'react'

import FriendsSearch from '../FriendsSearch'
import FriendRequests from '../FriendRequests'

const NewFriends = () => {
  return (
    <div className="NewFriends">
      <FriendsSearch />
      <FriendRequests />
    </div>
  )
}

export default NewFriends