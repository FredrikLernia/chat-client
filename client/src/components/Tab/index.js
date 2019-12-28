import React, { useContext } from 'react'
import './style.scss'

import PageContext from '../../context/PageContext'

import TabHeader from '../TabHeader'
import ChatList from '../ChatList'
import Friends from '../Friends'
import Settings from '../Settings'

const Tab = () => {
  const { tab } = useContext(PageContext)

  return (
    <div className="Tab">
      <TabHeader />
      {tab === 'chats' ? <ChatList /> : ''}
      {tab === 'friends' ? <Friends /> : ''}
      {tab === 'settings' ? <Settings /> : ''}
    </div>
  )
}

export default Tab