import React, { useState } from 'react'
import './style.scss'

const FriendRequests = () => {
  const [toggle, setToggle] = useState('received')

  return (
    <div className="FriendRequests">
      <h4>Friend Requests</h4>
      <div className="toggle">
        <div
          className={toggle === 'received' ? 'received selected' : 'received'}
          onClick={() => setToggle('received')}
        >
          Received
        </div>
        <div
          className={toggle === 'sent' ? 'sent selected' : 'sent'}
          onClick={() => setToggle('sent')}
        >
          Sent
        </div>
      </div>
    </div>
  )
}

export default FriendRequests