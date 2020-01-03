import React, { useState, useEffect } from 'react'
import './reset.css'
import './style.scss'

import UserContext from './context/UserContext'

import LoggedIn from './views/LoggedIn'
import LoggedOut from './views/LoggedOut'

const App = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    const getLoggedIn = async () => {
      const loggedInRaw = await fetch('/api/login')
      const loggedIn = await loggedInRaw.json()

      if (typeof loggedIn === 'object') {
        setUser(loggedIn)
      }
      else {
        console.log('Not logged in')
      }
    }

    getLoggedIn()
  }, [])

  if (user) {
    return (
      <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
          <LoggedIn />
        </UserContext.Provider>
      </div>
    )
  }

  return (
    <div className="App">
      <UserContext.Provider value={{ setUser }}>
        <LoggedOut />
      </UserContext.Provider>
    </div>
  )
}

export default App
