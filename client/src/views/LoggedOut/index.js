import React, { useState } from 'react'

import Login from '../../components/Login'
import SignUp from '../../components/SignUp'

const LoggedOut = () => {
  const [page, setPage] = useState('login')
  const [created, setCreated] = useState(false)

  return (
    <>
      {page === 'login' ? <Login changePage={setPage} created={created} setCreated={setCreated} /> : <SignUp changePage={setPage} setCreated={setCreated} />}
    </>
  )
}

export default LoggedOut