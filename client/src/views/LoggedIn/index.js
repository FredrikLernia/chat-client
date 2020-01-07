import React, { useState } from 'react'

import PageContext from '../../context/PageContext'

import InfoBox from '../../components/InfoBox'
import Menu from '../../components/Menu'
import Tab from '../../components/Tab'
import Main from '../../components/Main'

const LoggedIn = () => {
  const [tab, setTab] = useState('chats')
  const [friendView, setFriendView] = useState('list')
  const [pageFriendship, setPageFriendship] = useState(null)
  const [infoBox, setInfoBox] = useState({ open: false, page: '', text: '' })

  return (
    <PageContext.Provider value={{
      tab,
      setTab,
      pageFriendship,
      setPageFriendship,
      friendView,
      setFriendView,
      infoBox,
      setInfoBox
    }}>
      <InfoBox />
      <Menu />
      <Tab />
      <Main />
    </PageContext.Provider>
  )
}

export default LoggedIn