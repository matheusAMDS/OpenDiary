import React from 'react'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'
import { IconContext } from 'react-icons'
import { createUploadLink } from 'apollo-upload-client'
import { setContext } from 'apollo-link-context'

import Routes from './Routes'
import GlobalStyles from './globalStyles'
import { resolvers, typeDefs } from './resolvers'

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

const cache = new InMemoryCache()
const uploadLink = new createUploadLink({ 
  uri: 'http://localhost:4000/graphql'
})
const client = new ApolloClient({ 
  cache, 
  link: authLink.concat(uploadLink),
  typeDefs,
  resolvers
})

// initial local state
cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('token')
  }
})

function App() {
  return (
    <ApolloProvider client={client}>
      <IconContext.Provider 
        value={{ 
          style: { 
            cursor: "pointer",
            margin: "0 8px",
            verticalAlign: "middle"
          },
        }}
      >
        <GlobalStyles />
        <Routes />
      </IconContext.Provider>
    </ApolloProvider>
  )
}

export default App;
