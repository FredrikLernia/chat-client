import React, { useContext } from 'react'
import { Check, X, Plus } from 'react-feather'
import './style.scss'

import useSetUser from '../../functions/useSetUser'

import PageContext from '../../context/PageContext'

import Button from '../Button'

const SearchOption = ({ friendship, fullName, setSearch, setFoundUsers }) => {
  const { infoQueue, setInfoQueue } = useContext(PageContext)

  const { updateUser } = useSetUser()

  const { type, id } = friendship

  const onButtonClick = async (type, id) => {
    const friendshipRaw = await fetch(`/api/friendships/${id}`, {
      method: type === 'received' ? 'PUT' : type === 'sent' ? 'DELETE' : 'POST'
    })
    const friendship = await friendshipRaw.json()
    
    if (typeof friendship === 'object') {
      setTimeout(() => {
        type === 'add' && setInfoQueue([
          ...infoQueue,
          { page: 'friends', text: `Vänförfrågan till ${fullName} har skickats!` }
        ])
        type === 'received' && setInfoQueue([
          ...infoQueue,
          {page: 'friends', text: `Du och ${fullName} är nu vänner!`}
        ])
        setSearch('')
        setFoundUsers([])

        setTimeout(() => {
          updateUser()
        }, 100)
      }, 100)
    }
  }

  return (
    <div className="SearchOption">
      {friendship.type === 'friend' ?
        'Vänner'
        : friendship.type === 'received' ?
          <Button color="success" onClick={() => onButtonClick(type, id)}><Check />Bekräfta</Button>
          : friendship.type === 'sent' ?
            <Button color="gray" className="delete" onClick={() => onButtonClick(type, id)}><X />Avbryt</Button>
            : friendship.type === 'self' ?
              ''
              : <Button color="success" onClick={() => onButtonClick(type, id)}><Plus />Lägg till</Button>
      }
    </div>
  )
}

export default SearchOption