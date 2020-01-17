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

    sse.listen('new-request', ({ firstName, lastName }) => {
      setInfoQueue([
        ...infoQueue,
        { page: 'friends', text: `Du har fått en ny vänförfrågan från ${firstName + ' ' + lastName}!` }
      ])
      updateUser()
    })

    sse.listen('accepted-request', ({ firstName, lastName }) => {
      setInfoQueue([
        ...infoQueue,
        { page: 'friends', text: `${firstName + ' ' + lastName} har accepterat din vänförfrågan!` }
      ])
      updateUser()
    })

    sse.listen('delete-request', data => {
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