import React, { useContext } from 'react'

import PageContext from '../../context/PageContext'

import NewFriends from '../NewFriends'
import FriendsList from '../FriendsList'

const Friends = () => {
  const { page } = useContext(PageContext)
  const { friendView } = page
  
  if (friendView === 'list') {
    return (
      <div className="Friends">
        <FriendsList />
      </div>
    )
  }

  return (
    <div className="Friends">
      <NewFriends />
    </div>
  )
}

export default Friends