import React, { useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Header from '../Header'

import { Container } from './styles'
import { IS_LOGGED_IN } from '../../operations/query'

function Layout({ children }) {
  const { data } = useQuery(IS_LOGGED_IN)
  
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <>
      <Header isLoggedIn={data.isLoggedIn}/>
      <Container>
        {children}
      </Container>
    </>
  )
}

export default Layout;