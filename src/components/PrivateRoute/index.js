import React from 'react'
import { Route } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Redirect } from 'react-router-dom'

import Loading from '../Loading'

const IS_LOGGED_IN = gql`
  query IsLoggedIn {
    isLoggedIn @client
  }
`

function PrivateRoute({ component: Component, ...rest }) {
  const { data, loading } = useQuery(IS_LOGGED_IN)

  if (loading) return <Loading />

  return (
    <>
      <Route {...rest} render={props => (
        data.isLoggedIn 
          ? <Component {...props} /> 
          : <Redirect to="/login" />
      )} />
    </>
  )
}

export default PrivateRoute