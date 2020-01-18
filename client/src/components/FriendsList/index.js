import React, { useContext } from 'react'
import './style.scss'

import UserContext from '../../context/UserContext'
import PageContext from '../../context/PageContext'

import Friend from '../Friend/index.js'

const FriendsList = () => {
  const { user } = useContext(UserContext)
  const { page, setPage } = useContext(PageContext)

  let { friendships } = user
  friendships = [...friendships].sort((a, b) => {
    return (a.friend.lastName + a.friend.firstName).localeCompare((b.friend.lastName + b.friend.firstName))
  })

  return (
    <div className="FriendsList">
      {user.friendships.length ?
        friendships.map((friendship, i) => {
          if (!i || friendships[i - 1].friend.lastName[0] !== friendship.friend.lastName[0]) {
            return (
              <div key={i}>
                <p className="letter">{friendship.friend.lastName[0]}</p>
                <Friend friendship={friendship} />
              </div>
            )
          }
          return <Friend key={i} friendship={friendship} />
        })
        : <p className="no-friends">
          Du har inga vänner än. Klicka <span onClick={() => setPage({ ...page, friendView: 'new' })}>här</span> för att hitta nya!
        </p>}
    </div>
  )
}

export default FriendsList