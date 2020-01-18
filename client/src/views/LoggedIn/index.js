import React, { useState, useEffect } from 'react'
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

  const [page, setPage] = useState()

  const [infoQueue, setInfoQueue] = useState([])

  useEffect(() => {
    const getSessionPage = async () => {
      const sessionPageRaw = await fetch('/api/page')
      const sessionPage = await sessionPageRaw.json()
      setPage(sessionPage)
    }

    getSessionPage()
  }, [])

  useEffect(() => {
    const updateSessionPage = async () => {
      await fetch('/api/page', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(page)
      })
    }

    updateSessionPage()
  }, [page])

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

  if (page) {
    return (
      <PageContext.Provider value={{
        page,
        setPage,
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

  return <div />
}

export default LoggedIn