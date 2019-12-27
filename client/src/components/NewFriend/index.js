import React, { useState } from 'react'
import { UserPlus } from 'react-feather'
import './style.scss'

import Avatar from '../Avatar'

const { friends } = require('../../json/user.json')

const NewFriend = () => {
  const [search, setSearch] = useState('')
  const [foundUsers, setFoundUsers] = useState([])

  const onSearchChange = e => {
    let val = e.target.value

    setSearch(val)

    if (!val) {
      setFoundUsers([])
      return
    }

    const foundSearch = friends.filter(friend => {
      val = val.toLowerCase()
      const { username, firstName, lastName } = friend

      return (
        username.toLowerCase().startsWith(val) ||
        firstName.toLowerCase().startsWith(val) ||
        lastName.toLowerCase().startsWith(val)
      )
    })

    setFoundUsers(foundSearch)
  }

  const onSearchFocus = e => onSearchChange(e)

  const onSearchBlur = () => setFoundUsers([])

  return (
    <div className="NewFriend">
      <label htmlFor="friends-search">Add new friend</label>
      <input
        type="search"
        id="friends-search"
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

export default NewFriend