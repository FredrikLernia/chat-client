import React from 'react'
import { MessageSquare, Users, Settings, Power } from 'react-feather'
import './style.scss'

/* import Avatar from '../Avatar' */

const { tab } = require('../../json/page.json')
const user = require('../../json/user.json')

const Menu = () => {
  return (
    <div className={user.colorTheme ? `Menu ${user.colorTheme}` : 'Menu'}>
      {/* <div className="menu-item">
        <Avatar />
      </div> */}
      <div className={tab === 'chats' ? 'menu-item active' : 'menu-item'}>
        <MessageSquare />
      </div>
      <div className={tab === 'friends' ? 'menu-item active' : 'menu-item'}>
        <Users />
      </div>
      <div className={tab === 'active' ? 'menu-item active' : 'menu-item'}>
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