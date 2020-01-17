import React, { useContext } from 'react'
import './style.scss'

import PageContext from '../../context/PageContext'

import Avatar from '../Avatar'
import OnlineSymbol from '../OnlineSymbol'
// import Button from '../Button'

const Friend = props => {
  const { setPageFriendship } = useContext(PageContext)

  const { username, firstName, lastName, colorTheme, online } = props.friendship.friend

  return (
    <div className="Friend" onClick={() => setPageFriendship(props.friendship._id)}>
      <Avatar size="sm" initials={firstName[0] + lastName[0]} color={colorTheme} />
      <div className="content">
        <div className="name">
          <h5>{lastName + ', ' + firstName}</h5>
          {online ? <OnlineSymbol margin="left" /> : ''}
        </div>
        <p className="username">{username}</p>
      </div>
      {/* <Button color="gray" fullWidth="false">Ta bort</Button> */}
    </div>
  )
}

export default Friend