import React, { useState, useEffect } from 'react'
import './reset.css'
import './style.scss'

import userData from './json/user.json'
import UserContext from './context/UserContext'

import LoggedIn from './views/LoggedIn'
import LoggedOut from './views/LoggedOut'

const App = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    setUser(userData)
  }, [])

  if (user) {
    return (
      <div className="App">
        <UserContext.Provider value={{ user }}>
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
