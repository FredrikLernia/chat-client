import React, { useContext } from 'react'
import './style.scss'

import PageContext from '../../context/PageContext'

const TabHeader = () => {
  const { tab } = useContext(PageContext)

  return (
    <div className="TabHeader">
      <h2>{tab.substring(0, 1).toUpperCase() + tab.substring(1)}</h2>
    </div>
  )
}

export default TabHeader