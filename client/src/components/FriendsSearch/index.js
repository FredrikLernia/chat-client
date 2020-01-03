import React, { useState, useEffect, useContext } from 'react'
import { UserPlus } from 'react-feather'
import './style.scss'

import UserContext from '../../context/UserContext'

import Avatar from '../Avatar'

const FriendsSearch = () => {
  const { user } = useContext(UserContext)

  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const [foundUsers, setFoundUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const usersRaw = await fetch('/api/users')
      const users = await usersRaw.json()
      setUsers(users)
    }

    getUsers()
  }, [])

  const onSearchChange = e => {
    let val = e.target.value

    setSearch(val)

    if (!val) {
      setFoundUsers([])
      return
    }

    const foundSearch = users.filter(({ username, firstName, lastName }) => {
      val = val.toLowerCase().replace(/\s/g, '')

      return (
        username.toLowerCase().startsWith(val) ||
        (firstName.toLowerCase() + lastName.toLowerCase()).startsWith(val) ||
        (lastName.toLowerCase() + firstName.toLowerCase()).startsWith(val)
      )
    })

    setFoundUsers(foundSearch)
  }

  const onSearchFocus = e => onSearchChange(e)

  const onSearchBlur = () => setFoundUsers([])

  return (
    <div className="FriendsSearch">
      <label htmlFor="friends-search">Add Friend</label>
      <input
        type="search"
        id="friends-search"
        className={`shadow-${user.colorTheme}`}
        value={search}
        onChange={onSearchChange}
        onFocus={onSearchFocus}
        onBlur={onSearchBlur}
        placeholder="Search Friends..."
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