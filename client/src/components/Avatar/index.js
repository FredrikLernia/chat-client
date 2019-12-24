import React from 'react'
import './style.scss'

// Temporary user object
const user = require('../../json/user.json')

const Avatar = props => {
  const style = {
    size: props.size ? ' ' + props.size : '',
    color: user.colorTheme ? ' ' + user.colorTheme : ''
  }

  return (
    <div className={`Avatar${style.size}${style.color}`}>
      <span>{user.firstName[0] + user.lastName[0]}</span>
    </div>
  )
}

export default Avatar