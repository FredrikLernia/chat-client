import React from 'react'
import './style.scss'

const Avatar = props => {
  const { size, color } = props

  const style = {
    size: size ? ' ' + size : '',
    color: color ? ' ' + color : ''
  }

  return (
    <div className={`Avatar${style.size}${style.color}`}>
      <span>FS</span>
    </div>
  )
}

export default Avatar