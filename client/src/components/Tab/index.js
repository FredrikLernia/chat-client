import React from 'react'
import './style.scss'

import TabHeader from '../TabHeader'
/* import ChatList from '../ChatList' */
/* import Settings from '../Settings' */
import Friends from '../Friends'

const Tab = () => {
  return (
    <div className="Tab">
      <TabHeader />
      {/* <ChatList /> */}
      {/* <Settings /> */}
      <Friends />
    </div>
  )
}

export default Tab