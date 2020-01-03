import React, { useContext } from 'react'
import { UserPlus, List } from 'react-feather'
import './style.scss'

import PageContext from '../../context/PageContext'

const TabHeader = () => {
  const { tab, friendView, setFriendView } = useContext(PageContext)

  return (
    <div className="TabHeader">
      <h2>
        {tab.substring(0, 1).toUpperCase() + tab.substring(1)}
      </h2>
      {tab === 'friends' ?
        friendView === 'list' ? <UserPlus onClick={() => setFriendView('new')} /> : <List onClick={() => setFriendView('list')} />
      : ''}
    </div>
  )
}

export default TabHeader