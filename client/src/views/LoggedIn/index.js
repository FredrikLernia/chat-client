import React, { useState } from 'react'
import SSE from 'easy-server-sent-events/sse'

import useSetUser from '../../functions/useSetUser'

import PageContext from '../../context/PageContext'

import InfoBox from '../../components/InfoBox'
import Menu from '../../components/Menu'
import Tab from '../../components/Tab'
import Main from '../../components/Main'

const sse = new SSE('/api/sse')
let sseListenerAdded = false

const LoggedIn = () => {
  const { updateUser } = useSetUser()

  const [tab, setTab] = useState('chats')
  const [friendView, setFriendView] = useState('list')
  const [pageFriendship, setPageFriendship] = useState(null)
  const [infoQueue, setInfoQueue] = useState([])

  if (!sseListenerAdded) {
    sse.listen('message', () => {
      updateUser()
    })
    sseListenerAdded = true
  }

  return (
    <PageContext.Provider value={{
      tab,
      setTab,
      pageFriendship,
      setPageFriendship,
      friendView,
      setFriendView,
      infoQueue,
      setInfoQueue
    }}>
      <InfoBox />
      <Menu />
      <Tab />
      <Main />
    </PageContext.Provider>
  )
}

export default LoggedIn