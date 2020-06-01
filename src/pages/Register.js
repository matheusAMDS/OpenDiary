import React, { useState } from 'react'
import { useMutation, useApolloClient } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { useHistory, Link } from 'react-router-dom'

import SessionForm from '../components/SessionForm'
import Loading from '../components/Loading'
import Error from '../components/Error'

const REGISTER_USER = gql`
  mutation Register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password)
  }
`

function Register() {
  const history = useHistory()
  const client = useApolloClient()

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const [ register, { loading, error }] = useMutation(REGISTER_USER, {
    onCompleted({ register }) {
      localStorage.setItem('token', register)
      client.writeData({ data: { isLoggedIn: true } })
      history.push('/home')
    }
  })

  function handleSubmit(e) {
    e.preventDefault()

    if (!name) {
      alert("Name field is empty!")
      return 
    }
    
    if (!email) {
      alert("Email field is empty!")
      return
    }
      
    if (!password) {
      alert("Password field is empty!")
      return 
    }
    register({ variables: {
      name,
      email,
      password
    }})
  }

  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <>
      <SessionForm onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input 
          placeholder="Name"
          onChange={e => setName(e.target.value)}
        />
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
        <button type="submit">Register</button>
        <Link to="/login">
          Already registered? Login here!
        </Link>
      </SessionForm>
    </>
  )
}

export default Register