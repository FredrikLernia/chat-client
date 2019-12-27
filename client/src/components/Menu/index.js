import React from 'react'
import { MessageSquare, Users, Settings, Power } from 'react-feather'
import './style.scss'

/* import Avatar from '../Avatar' */

const user = require('../../json/user.json')

const Menu = () => {
  return (
    <div className={user.colorTheme ? `Menu ${user.colorTheme}` : 'Menu'}>
      {/* <div className="menu-item">
        <Avatar />
      </div> */}
      <div className="menu-item">
        <MessageSquare />
      </div>
      <div className="menu-item">
        <Users />
      </div>
      <div className="menu-item">
        <Settings />
      </div>
      <div className="space" />
      <div className="menu-item">
        <Power />
      </div>
    </div>
  )
}

export default Menu