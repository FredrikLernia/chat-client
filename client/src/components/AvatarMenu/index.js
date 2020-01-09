import React, { useContext } from 'react'
import './style.scss'

import UserContext from '../../context/UserContext'

const AvatarMenu = () => {
  const { user } = useContext(UserContext)

  return (
    <div className="AvatarMenu">
      <div className="initials"><span className="text">{user.firstName[0] + user.lastName[0]}</span></div>
    </div>
  )
}

export default AvatarMenu