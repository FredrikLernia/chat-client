import React, { useState } from 'react'
import './reset.css'
import './style.scss'

import PageContext from './context/PageContext'

import LoggedIn from './views/LoggedIn'

const App = () => {
  const [tab, setTab] = useState('chats')

  return (
    <div className="App">
      <PageContext.Provider value={{ tab, setTab }}>
        <LoggedIn />
      </PageContext.Provider>
    </div>
  )
}

export default App
