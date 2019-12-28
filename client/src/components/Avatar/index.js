import React from 'react'
import './style.scss'

const Avatar = props => {
  const style = {
    size: props.size ? ' ' + props.size : '',
    color: props.color ? ' bg-' + props.color : ''
  }

  return (
    <div className={`Avatar${style.color}`}>
      <span className={style.size}>{props.initials}</span>
    </div> 
  )
}

export default Avatar