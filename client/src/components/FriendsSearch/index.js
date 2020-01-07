import React, { useState, useContext } from 'react'
import './style.scss'

import UserContext from '../../context/UserContext'

import Avatar from '../Avatar'
import SearchOption from '../SearchOption'

const FriendsSearch = () => {
  const { user } = useContext(UserContext)

  const [search, setSearch] = useState('')
  const [foundUsers, setFoundUsers] = useState([])

  const onSearchChange = async e => {
    let val = e.target.value

    setSearch(val)

    if (!val) {
      setFoundUsers([])
      return
    }

    const usersRaw = await fetch(`/api/users/?search=${val}`)
    const users = await usersRaw.json()
    setFoundUsers(users)
  }

  const onSearchFocus = e => onSearchChange(e)

  // onBlur didn't work with the onClick inside the results div
  // const onSearchBlur = () => setFoundUsers([])

  const getFriendship = id => {
    if (user.friendships.some(({ friend }) => friend._id === id)) {
      return { type: 'friend' }
    }
    if (user.friendRequests.received.some(({ friend }) => friend._id === id)) {
      return { 
        type: 'received',
        id: user.friendRequests.received.find(({ friend }) => friend._id === id)._id
      }
    }
    if (user.friendRequests.sent.some(({ friend }) => friend._id === id)) {
      return {
        type: 'sent',
        id: user.friendRequests.sent.find(({ friend }) => friend._id === id)._id
      }
    }
    if (user._id === id) {
      return { type: 'self' }
    }
    return {
      type: 'add',
      id
    }
  }

  return (
    <div className="FriendsSearch">
      <label htmlFor="friends-search">Lägg till vän</label>
      <input
        type="search"
        id="friends-search"
        className={`shadow-${user.colorTheme}`}
        value={search}
        onChange={onSearchChange}
        onFocus={onSearchFocus}
        // onBlur={onSearchBlur}
        placeholder="Sök vänner..."
        autoComplete="off"
      />
      {foundUsers.length ?
        <div className="results">
          {foundUsers.map(({ _id, username, firstName, lastName, colorTheme }, i) => {
            const friendship = getFriendship(_id)

            return (
              <div key={i} className="found-friend">
                <Avatar size="sm" color={colorTheme} initials={firstName[0] + lastName[0]} />
                <div className="content">
                  <h5>{firstName + ' ' + lastName}</h5>
                  <p className="username">{username}</p>
                </div>
                <SearchOption friendship={friendship} setSearch={setSearch} setFoundUsers={setFoundUsers} />
              </div>
            )
          })}
        </div>
        : ''
      }
    </div>
  )
}

export default FriendsSearch