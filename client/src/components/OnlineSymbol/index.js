import React from 'react'
import './style.scss'

const OnlineSymbol = ({ margin }) => {
  return (
    <div className={margin === 'left' ? 'OnlineSymbol left' : margin === 'right' ? 'OnlineSymbol right' : 'OnlineSymbol'} />
  )
}

export default OnlineSymbol