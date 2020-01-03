import React, { useContext } from 'react'
import './style.scss'

import UserContext from '../../context/UserContext'
import PageContext from '../../context/PageContext'

import Friend from '../Friend/index.js'

const FriendsList = () => {
  const { user } = useContext(UserContext)
  const { setFriendView } = useContext(PageContext)

  return (
    <div className="FriendsList">
      {user.friendships.length ?
        user.friendships.map((friendship, i) => <Friend key={i} friendship={friendship} />)
        : <p className="no-friends">
          You don't have any friends yet. Click <span onClick={() => setFriendView('new')}>here</span> to find some new!
        </p>}
    </div>
  )
}

export default FriendsList