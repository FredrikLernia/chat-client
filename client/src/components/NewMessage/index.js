import React, { useContext } from 'react'
import { Send } from 'react-feather'
import './style.scss'

import UserContext from '../../context/UserContext'
import PageContext from '../../context/PageContext'

import Avatar from '../Avatar'

const NewMessage = () => {
  const { user } = useContext(UserContext)
  const { pageFriendship } = useContext(PageContext)

  const { firstName, lastName, colorTheme } = user

  const onSubmit = e => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <>
      <div className="typing">{pageFriendship.friend.firstName} is typing<span>.</span><span>.</span><span>.</span></div>
      <div className="NewMessage">
        <Avatar size="lg" initials={firstName[0] + lastName[0]} color={colorTheme} />
        <form onSubmit={onSubmit}>
          <textarea rows="4" placeholder="Type a message..." />
          <button type="submit">Send<Send /></button>
        </form>
      </div>
    </>
  )
}

export default NewMessage