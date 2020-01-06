import React, { useContext } from 'react'
import './style.scss'

import PageContext from '../../context/PageContext'

import Avatar from '../Avatar'
import OnlineSymbol from '../OnlineSymbol'

const Friend = props => {
  const { setPageFriendship } = useContext(PageContext)

  const { username, firstName, lastName, colorTheme, online } = props.friendship.friend

  return (
    <div className="Friend">
      <div className="change-chat" onClick={() => setPageFriendship(props.friendship)}>
        <Avatar size="sm" initials={firstName[0] + lastName[0]} color={colorTheme} />
        <div className="content">
          <h5>{lastName + ', ' + firstName}{online ? <OnlineSymbol margin="left" /> : ''}</h5>
          <p className="username">{username}</p>
        </div>
      </div>
      <button>Ta bort</button>
    </div>
  )
}

export default Friend