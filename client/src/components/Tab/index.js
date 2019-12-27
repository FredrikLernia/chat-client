import React from 'react'
import './style.scss'

import TabHeader from '../TabHeader'
/* import ChatList from '../ChatList' */
import Settings from '../Settings'

const Tab = () => {
  return (
    <div className="Tab">
      <TabHeader />
      {/* <ChatList /> */}
      <Settings />
    </div>
  )
}

export default Tab