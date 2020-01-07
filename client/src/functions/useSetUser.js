import { useContext } from 'react'

import UserContext from '../context/UserContext'

export default () => {
  const { setUser } = useContext(UserContext)

  const update = async () => {
    const loggedInRaw = await fetch('/api/login')
    const loggedIn = await loggedInRaw.json()
    typeof loggedIn === 'object' && setUser(loggedIn)
  }

  return { update }
}