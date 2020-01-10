import React from 'react'
import './style.scss'

const Button = props => {
  const fullWidth = props.fullWidth === undefined ? true : false

  return (
    <button
      type={props.type}
      className={`Button bg-${props.color}${fullWidth ? ' w-100' : ''}${props.className ? ` ${props.className}` : ''}`}
      onClick={props.onClick}
    >
      <div>{props.children}</div>
    </button>
  )
}

export default Button