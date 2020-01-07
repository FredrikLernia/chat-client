import React, { useEffect, useContext } from 'react'
import { MessageSquare, Users, Settings } from 'react-feather'
import './style.scss'

import PageContext from '../../context/PageContext'

const InfoBox = () => {
  const { infoBox, setInfoBox } = useContext(PageContext)
  const { open, page, text } = infoBox

  useEffect(() => {
    setTimeout(() => open && setInfoBox({ ...infoBox, open: false }), 4000)
  })

  return (
    <div className={open ? 'InfoBox open' : 'InfoBox'}>
      <div className="content">
        {page === 'chats' ? <MessageSquare /> : page === 'friends' ? <Users /> : page === 'settings' ? <Settings /> : ''}
        {text ? text : ''}
      </div>
    </div>
  )
}

export default InfoBox