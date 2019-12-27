import React from 'react'
import './style.scss'

import TabHeader from '../TabHeader'
import ChatList from '../ChatList'
import Settings from '../Settings'
import Friends from '../Friends'

const { tab } = require('../../json/page.json')

const Tab = () => {
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