import React, { useContext } from 'react'
import { UserMinus } from 'react-feather'
import './style.scss'

import PageContext from '../../context/PageContext'

import Avatar from '../Avatar'
import OnlineSymbol from '../OnlineSymbol'

const Friend = props => {
  const { setPageFriendship } = useContext(PageContext)

  const { firstName, lastName, colorTheme, online } = props.friendship.friend

  return (
    <div className="Friend">
      <div className="change-chat" onClick={() => setPageFriendship(props.friendship)}>
        <Avatar size="sm" initials={firstName[0] + lastName[0]} color={colorTheme} />
        <h4>{lastName + ', ' + firstName}{online ? <OnlineSymbol margin="left" /> : ''}</h4>
      </div>
      <UserMinus onClick={() => console.log('delete')} />
    </div>
  )
}

export default Friend