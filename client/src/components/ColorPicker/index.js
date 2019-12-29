import React, { useState } from 'react'
import { ChevronDown } from 'react-feather'
import './style.scss'

const ColorPicker = ({ color, changeColor }) => {
  const [pickerOpen, setPickerOpen] = useState(false)
  const colors = ['yellow', 'green', 'red', 'blue', 'orange', 'wine', 'purple']

  return (
    <div className="ColorPicker">
      <label htmlFor="colorTheme">Color Theme</label>
      <div className={pickerOpen ? 'color-picker open' : 'color-picker'} onClick={() => setPickerOpen(!pickerOpen)}>
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