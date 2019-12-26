import React from 'react'
import './style.scss'

import TabHeader from '../TabHeader'
import ChatList from '../ChatList'

const Tab = () => {
  return (
    <div className="Tab">
      <TabHeader />
      <ChatList />
    </div>
  )
}

export default Tab