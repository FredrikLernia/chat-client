import React, { useContext } from 'react'
import './style.scss'

import UserContext from '../../context/UserContext'

const CountCircle = ({ location }) => {
  const { user } = useContext(UserContext)
  const nr = user.friendRequests.received.length

  if (nr) {
    return (
      <div className="CountCircle">
        <div className={location === 'menu' ? 'count menu' : 'count tab-header'}>
          {nr < 10 ? nr : '9+'}
        </div>
      </div>
    )
  }

  return (
    <div className="CountCircle" />
  )
}

export default CountCircle