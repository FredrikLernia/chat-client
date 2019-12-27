import React from 'react'
import './style.scss'

const { tab } = require('../../json/page.json')

const TabHeader = () => {
  return (
    <div className="TabHeader">
      <h2>{tab.substring(0, 1).toUpperCase() + tab.substring(1)}</h2>
    </div>
  )
}

export default TabHeader