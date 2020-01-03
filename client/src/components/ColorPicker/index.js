import React, { useState, useContext } from 'react'
import { ChevronDown } from 'react-feather'
import './style.scss'

import UserContext from '../../context/UserContext'

const ColorPicker = ({ color, changeColor }) => {
  const { user } = useContext(UserContext)

  const [pickerOpen, setPickerOpen] = useState(false)
  const colors = ['yellow', 'green', 'red', 'blue', 'orange', 'wine', 'purple']

  const shadow = user ? ` shadow-${user.colorTheme}` : ''

  return (
    <div className="ColorPicker">
      <label htmlFor="colorTheme">Color Theme</label>
      <div className={pickerOpen ? `color-picker open${shadow}` : `color-picker${shadow}`} onClick={() => setPickerOpen(!pickerOpen)}>
        <div className={`color bg-${color}`}></div>
        <ChevronDown />
      </div>
      <div className="color-list-relative">
        {pickerOpen ?
          <div className="color-list">
            {colors.map((color, i) => (
              <div
                key={i}
                className={`color bg-${color}`}
                onClick={() => {
                  changeColor(color)
                  setPickerOpen(false)
                }}
              />
            ))}
          </div>
          : ''}
      </div>
    </div>
  )
}

export default ColorPicker