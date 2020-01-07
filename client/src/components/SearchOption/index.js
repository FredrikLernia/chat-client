import React from 'react'
import { Check, X, Plus } from 'react-feather'
import './style.scss'

import useSetUser from '../../functions/useSetUser'

const SearchOption = ({ friendship }) => {
  const { update } = useSetUser()

  const { type, id } = friendship

  const onButtonClick = async (type, id) => {
    if (type === 'received') {
      const friendshipRaw = await fetch(`/api/friendships/${id}`, { method: 'PUT' })
      const friendship = await friendshipRaw.json()
      if (typeof friendship === 'object') {
        update()
      }
      return
    }

    if (type === 'sent') {
      const friendshipRaw = await fetch(`/api/friendships/${id}`, { method: 'DELETE' })
      const friendship = await friendshipRaw.json()
      if (typeof friendship === 'object') {
        update()
      }
      return
    }

    if (type === 'add') {
      const friendshipRaw = await fetch(`/api/friendships/${id}`, { method: 'POST' })
      const friendship = await friendshipRaw.json()
      if (typeof friendship === 'object') {
        update()
      }
      return
    }
  }

  return (
    <div className="SearchOption">
      {friendship.type === 'friend' ?
        'Vänner'
        : friendship.type === 'received' ?
          <button className="confirm" onClick={() => onButtonClick(type, id)}><Check />Bekräfta</button>
          : friendship.type === 'sent' ?
            <button className="delete" onClick={() => onButtonClick(type, id)}><X />Avbryt</button>
            : friendship.type === 'self' ?
              ''
              : <button className="add" onClick={() => onButtonClick(type, id)}><Plus />Lägg till</button>
      }
    </div>
  )
}

export default SearchOption