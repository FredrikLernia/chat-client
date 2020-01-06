import React, { useState, useContext } from 'react'
import { UserPlus } from 'react-feather'
import './style.scss'

import UserContext from '../../context/UserContext'

import Avatar from '../Avatar'

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

  const onSearchBlur = () => setFoundUsers([])

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
        onBlur={onSearchBlur}
        placeholder="Sök vänner..."
      />
      {foundUsers.length ?
        <div className="results">
          {foundUsers.map(({ username, firstName, lastName, colorTheme }, i) => (
            <div key={i} className="found-friend">
              <Avatar size="sm" color={colorTheme} initials={firstName[0] + lastName[0]} />
              <div className="content">
                <h4>{firstName + ' ' + lastName}</h4>
                <p className="username">{username}</p>
              </div>
              <UserPlus />
            </div>
          ))}
        </div>
        : ''
      }
    </div>
  )
}

export default FriendsSearch