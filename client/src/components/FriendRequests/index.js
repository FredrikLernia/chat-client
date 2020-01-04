import React, { useState } from 'react'
import './style.scss'

const FriendRequests = () => {
  const [toggle, setToggle] = useState('received')

  return (
    <div className="FriendRequests">
      <h4>Vänförfrågningar</h4>
      <div className="toggle">
        <div
          className={toggle === 'received' ? 'received selected' : 'received'}
          onClick={() => setToggle('received')}
        >
          Mottagna
        </div>
        <div
          className={toggle === 'sent' ? 'sent selected' : 'sent'}
          onClick={() => setToggle('sent')}
        >
          Skickade
        </div>
      </div>
    </div>
  )
}

export default FriendRequests