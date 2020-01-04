import React, { useContext, useRef } from 'react'
import { Send } from 'react-feather'
import './style.scss'

import UserContext from '../../context/UserContext'
import PageContext from '../../context/PageContext'

import Avatar from '../Avatar'

const NewMessage = () => {
  const { user } = useContext(UserContext)
  const { pageFriendship } = useContext(PageContext)
  const text = useRef()

  const { firstName, lastName, colorTheme } = user

  const onSubmit = async e => {
    e.preventDefault()

    // SSE
    if (text.current.value.length > 0) {
      await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ friendshipId: pageFriendship._id, text: text.current.value })
      })
    }
  }

  return (
    <>
      <div className="typing">{pageFriendship.friend.firstName} is typing<span>.</span><span>.</span><span>.</span></div>
      <div className="NewMessage">
        <Avatar size="lg" initials={firstName[0] + lastName[0]} color={colorTheme} />
        <form onSubmit={onSubmit}>
          <textarea rows="4" placeholder="Type a message..." ref={text} />
          <button type="submit">Send<Send /></button>
        </form>
      </div>
    </>
  )
}

export default NewMessage