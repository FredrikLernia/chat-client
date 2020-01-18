import React, { useContext } from 'react'
import { PlusCircle, List } from 'react-feather'
import './style.scss'

import PageContext from '../../context/PageContext'

import CountCircle from '../CountCircle'

const TabHeader = () => {
  const { page, setPage } = useContext(PageContext)
  const { tab, friendView } = page

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
            <PlusCircle onClick={() => setPage({ ...page, friendView: 'new' })} />
          </>
          : <List onClick={() => setPage({ ...page, friendView: 'list' })} />
        : ''}
    </div>
  )
}

export default TabHeader