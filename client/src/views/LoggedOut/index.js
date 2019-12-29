import React, { useState } from 'react'

import Login from '../../components/Login'
import SignUp from '../../components/SignUp'

const LoggedOut = () => {
  const [page, setPage] = useState('login')

  return (
    <>
      {page === 'login' ? <Login changePage={setPage} /> : <SignUp changePage={setPage} />}
    </>
  )
}

export default LoggedOut