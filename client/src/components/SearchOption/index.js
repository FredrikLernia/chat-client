import React from 'react'
import { Check, X, Plus } from 'react-feather'
import './style.scss'

const SearchOption = ({ friendshipType }) => {
  return (
    <div className="SearchOption">
      {friendshipType === 'friend' ?
        'Vänner'
        : friendshipType === 'received' ?
          <button className="confirm"><Check />Bekräfta</button>
          : friendshipType === 'sent' ?
            <button className="delete"><X />Avbryt</button>
            : friendshipType === 'self' ?
              ''
              : <button className="add"><Plus />Lägg till</button>
      }
    </div>
  )
}

export default SearchOption