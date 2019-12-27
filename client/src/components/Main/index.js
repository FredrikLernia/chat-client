import React from 'react'
import './style.scss'

import ChatWindow from '../ChatWindow'
/* import EmptyChat from '../EmptyChat' */

const Main = () => {
  return (
    <div className="Main">
      <ChatWindow />
      {/* <EmptyChat /> */}
    </div>
  )
}

export default Main