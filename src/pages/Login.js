import React, { useState } from 'react'
import { useMutation, useApolloClient } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { useHistory, Link } from 'react-router-dom'

import SessionForm from '../components/SessionForm'
import Loading from '../components/Loading'
import Error from '../components/Error'

const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`

function Login() {
  const history = useHistory()
  const client = useApolloClient()

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const [ login, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      localStorage.setItem('token', login)
      client.writeData({ data: { isLoggedIn: true } })
      history.push('/home')
    }
  })

  function handleSubmit(e) {
    e.preventDefault()

    if (!email) {
      alert("Email field is empty!")
      return
    }
      
    if (!password) {
      alert("Password field is empty!")
      return 
    }

    login({ 
      variables: {
        email,
        password
      }
    })
  }

  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <>
      <SessionForm onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input 
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <input 
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <Link to="/register">
          Still not registered? Register here!
        </Link>
      </SessionForm>
    </>
  )
}

export default Login