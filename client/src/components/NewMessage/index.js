import React, { useContext, useRef, useEffect } from 'react'
import { Send } from 'react-feather'
import './style.scss'

import useSetUser from '../../functions/useSetUser'

import UserContext from '../../context/UserContext'
import PageContext from '../../context/PageContext'

import Avatar from '../Avatar'
import Button from '../Button'

const NewMessage = () => {
  const { updateUser } = useSetUser()

  const { user } = useContext(UserContext)
  const { pageFriendship } = useContext(PageContext)
  const text = useRef()

  useEffect(() => {
    text.current.value = ''
  }, [pageFriendship])

  const { firstName, lastName, colorTheme } = user

  const { friend } = user.friendships.find(friendship => friendship._id === pageFriendship)

  const onSubmit = async e => {
    if (e) {
      e.preventDefault()
    }

    // SSE
    if (text.current.value.length > 0) {
      await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ friendshipId: pageFriendship, text: text.current.value })
      })
      updateUser()
      text.current.value = ''
    }
  }

  const submitOnEnter = e => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault()
      onSubmit()
    }
  }

  return (
    <>
      <div className="typing">{friend.firstName} skriver<span>.</span><span>.</span><span>.</span></div>
      <div className="NewMessage">
        <Avatar size="lg" initials={firstName[0] + lastName[0]} color={colorTheme} />
        <form onSubmit={onSubmit}>
          <textarea
            rows="4"
            placeholder="Skriv ett meddelande..."
            ref={text}
            onKeyDown={submitOnEnter}
          />
          <Button type="submit" color="app-green" fullWidth="false">Skicka<Send /></Button>
        </form>
      </div>
    </>
  )
}

export default NewMessage