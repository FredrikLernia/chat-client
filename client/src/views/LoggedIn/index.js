import React, { useState } from 'react'

import PageContext from '../../context/PageContext'

import Menu from '../../components/Menu'
import Tab from '../../components/Tab'
import Main from '../../components/Main'

const LoggedIn = () => {
  const [tab, setTab] = useState('chats')
  const [pageFriendship, setPageFriendship] = useState(null)

  return (
    <PageContext.Provider value={{ tab, setTab, pageFriendship, setPageFriendship }}>
      <Menu />
      <Tab />
      <Main />
    </PageContext.Provider>
  )
}

export default LoggedIn