import React, { useContext } from 'react'
import './style.scss'

import PageContext from '../../context/PageContext'

import Avatar from '../Avatar'
import OnlineSymbol from '../OnlineSymbol'

const Friend = props => {
  const { page, setPage } = useContext(PageContext)

  const { username, firstName, lastName, colorTheme, online } = props.friendship.friend

  return (
    <div className="Friend" onClick={() => setPage({ ...page, friendship: props.friendship._id })}>
      <Avatar size="sm" initials={firstName[0] + lastName[0]} color={colorTheme} />
      <div className="content">
        <div className="name">
          <h5>{lastName + ', ' + firstName}</h5>
          {online ? <OnlineSymbol margin="left" /> : ''}
        </div>
        <p className="username">{username}</p>
      </div>
    </div>
  )
}

export default Friend