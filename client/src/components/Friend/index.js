import React from 'react'
import { UserMinus } from 'react-feather'
import './style.scss'

import Avatar from '../Avatar'

const Friend = props => {
  const { firstName, lastName, colorTheme } = props.friend

  return (
    <div className="Friend">
      <Avatar size="sm" initials={firstName[0] + lastName[0]} color={colorTheme} />
      <h4>{lastName + ', ' + firstName}</h4>
      <UserMinus />
    </div>
  )
}

export default Friend