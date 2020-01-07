import React, { useState, useContext } from 'react'
import './style.scss'

import useSetUser from '../../functions/useSetUser'

import UserContext from '../../context/UserContext'

import Avatar from '../Avatar'

const FriendRequests = () => {
  const { update } = useSetUser()

  const { user } = useContext(UserContext)
  const { received, sent } = user.friendRequests

  const [toggle, setToggle] = useState('received')

  const onConfirmClick = async id => {
    const friendshipRaw = await fetch(`/api/friendships/${id}`, { method: 'PUT' })
    const friendship = await friendshipRaw.json()
    if (typeof friendship === 'object') {
      update()
    }
  }

  const onDeleteClick = async id => {
    const friendshipRaw = await fetch(`/api/friendships/${id}`, { method: 'DELETE' })
      const friendship = await friendshipRaw.json()
      if (typeof friendship === 'object') {
        update()
      }
  }

  return (
    <div className="FriendRequests">
      <h4>Vänförfrågningar</h4>
      <div className={`toggle bg-${user.colorTheme}`}>
        <div
          className={toggle === 'received' ? 'received  selected' : 'received'}
          onClick={() => setToggle('received')}
        >
          {received.length ? `Mottagna (${received.length})` : 'Mottagna'}
        </div>
        <div
          className={toggle === 'sent' ? 'sent selected' : 'sent'}
          onClick={() => setToggle('sent')}
        >
          {sent.length ? `Skickade (${sent.length})` : 'Skickade'}
        </div>
      </div>
      {toggle === 'received' ?
        received.length ?
          received.map(({ _id, friend }, i) => {
            const { username, firstName, lastName, colorTheme } = friend
            return (
              <div key={i} className="request received-req">
                <Avatar size="sm" color={colorTheme} initials={firstName[0] + lastName[0]} />
                <div className="content">
                  <h5>{firstName + ' ' + lastName}</h5>
                  <p className="username">{username}</p>
                </div>
                <button className="confirm" onClick={() => onConfirmClick(_id)}>Bekräfta</button>
                <button className="delete" onClick={() => onDeleteClick(_id)}>Ta bort</button>
              </div>
            )
          })
          : <p className="no-requests">Du har inga mottagna vänförfrågningar.</p>
        :
        sent.length ?
          sent.map(({ _id, friend }, i) => {
            const { username, firstName, lastName, colorTheme } = friend
            return (
              <div key={i} className="request sent-req">
                <Avatar size="sm" color={colorTheme} initials={firstName[0] + lastName[0]} />
                <div className="content">
                  <h5>{firstName + ' ' + lastName}</h5>
                  <p className="username">{username}</p>
                </div>
                <button className="delete" onClick={() => onDeleteClick(_id)}>Avbryt</button>
              </div>
            )
          })
          : <p className="no-requests">Du har inga skickade vänförfrågningar.</p>
      }
    </div>
  )
}

export default FriendRequests