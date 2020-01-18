import React, { useContext } from 'react'
import './style.scss'

import PageContext from '../../context/PageContext'

import TabHeader from '../TabHeader'
import ChatList from '../ChatList'
import Friends from '../Friends'
import Settings from '../Settings'

const Tab = () => {
  const { page } = useContext(PageContext)
  const { tab } = page
  
  return (
    <div className="Tab">
      <TabHeader />
      <div className="content">
        {tab === 'chats' ? <ChatList /> : ''}
        {tab === 'friends' ? <Friends /> : ''}
        {tab === 'settings' ? <Settings /> : ''}
      </div>
    </div>
  )
}

export default Tab