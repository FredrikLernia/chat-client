import React, { useContext } from 'react'
import { PlusCircle, List } from 'react-feather'
import './style.scss'

import PageContext from '../../context/PageContext'

import CountCircle from '../CountCircle'

const TabHeader = () => {
  const { tab, friendView, setFriendView } = useContext(PageContext)

  const translate = {
    chats: 'Chattar',
    friends: 'Vänner',
    settings: 'Inställningar'
  }

  return (
    <div className="TabHeader">
      <h2>
        {translate[tab]}
      </h2>
      {tab === 'friends' ?
        friendView === 'list' ?
          <>
            <CountCircle location="tabHeader" />
            <PlusCircle onClick={() => setFriendView('new')} />
          </>
          : <List onClick={() => setFriendView('list')} />
        : ''}
    </div>
  )
}

export default TabHeader