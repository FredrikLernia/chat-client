import React, { useContext } from 'react'
import { MessageSquare, Users, Settings, Power } from 'react-feather'
import './style.scss'

import UserContext from '../../context/UserContext'
import PageContext from '../../context/PageContext'

/* import Avatar from '../Avatar' */

const Menu = () => {
  const { user, setUser } = useContext(UserContext)
  const { tab, setTab } = useContext(PageContext)

  const onMenuClick = tab => setTab(tab)

  const logout = async () => {
    await fetch('/api/login', { method: 'DELETE' })
    setUser('')
  }

  return (
    <nav className={user.colorTheme ? `Menu bg-${user.colorTheme}` : 'Menu'}>
      {/* <div className="menu-item">
        <Avatar />
      </div> */}
      <div className={tab === 'chats' ? 'menu-item active' : 'menu-item'} onClick={() => onMenuClick('chats')}>
        <MessageSquare />
      </div>
      <div className={tab === 'friends' ? 'menu-item active' : 'menu-item'} onClick={() => onMenuClick('friends')}>
        <Users />
      </div>
      <div className={tab === 'settings' ? 'menu-item active' : 'menu-item'} onClick={() => onMenuClick('settings')}>
        <Settings />
      </div>
      <div className="space" />
      <div className="menu-item">
        <Power onClick={logout} />
      </div>
    </nav>
  )
}

export default Menu