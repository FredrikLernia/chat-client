import React, { useState, useContext } from 'react'
import { MessageSquare, Users, Settings } from 'react-feather'
import './style.scss'

import PageContext from '../../context/PageContext'

const InfoBox = () => {
  const { infoQueue, setInfoQueue } = useContext(PageContext)

  const [info, setInfo] = useState({ open: false })

  if (infoQueue.length && !info.open) {
    setTimeout(() => {
      setInfo({ open: true, page: infoQueue[0].page, text: infoQueue[0].text })
      const updatedQueue = [...infoQueue]
      updatedQueue.shift()
      setInfoQueue(updatedQueue)
      setTimeout(() => {
        setInfo({ open: false })
      }, 4000)
    }, 300) // 300ms equals the css transition time set
  }

  return (
    <div className={info.open ? 'InfoBox open' : 'InfoBox'}>
      <div className="content">
        {info.page === 'chats' ? <MessageSquare /> : info.page === 'friends' ? <Users /> : info.page === 'settings' ? <Settings /> : ''}
        {info.text ? info.text : ''}
      </div>
    </div>
  )
}

export default InfoBox