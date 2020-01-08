import React, { useContext } from 'react'
import { Check, X, Plus } from 'react-feather'
import './style.scss'

import useSetUser from '../../functions/useSetUser'

import PageContext from '../../context/PageContext'

const SearchOption = ({ friendship, fullName, setSearch, setFoundUsers }) => {
  const { setInfoBox } = useContext(PageContext)

  const { updateUser } = useSetUser()

  const { type, id } = friendship

  const onButtonClick = async (type, id) => {
    const friendshipRaw = await fetch(`/api/friendships/${id}`, {
      method: type === 'received' ? 'PUT' : type === 'sent' ? 'DELETE' : 'POST'
    })
    const friendship = await friendshipRaw.json()
    
    if (typeof friendship === 'object') {
      setTimeout(() => {
        type === 'add' && setInfoBox({
          open: true,
          page: 'friends',
          text: `Vänförfrågan till ${fullName} har skickats!`
        })
        type === 'received' && setInfoBox({
          open: true,
          page: 'friends',
          text: `Du och ${fullName} är nu vänner!`
        })
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