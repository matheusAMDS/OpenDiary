import React from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import Loading from '../Loading'

import { 
  Name, 
  Username, 
  UserPic, 
  RecommendedContainer,
  User,
  UsersContainer
} from './styles'

const RECOMMENDED_USERS = gql`
  query RecommendedUsers {
    users {
      _id
      name 
      username
      userPic
    }
  }
`

function RecommendedUsers({ loggedUser }) {
  const history = useHistory()
  const { data, loading } = useQuery(RECOMMENDED_USERS)

  if (loading) return <Loading />

  return (
    <RecommendedContainer>
      <h3>Recommended Users</h3>

      <UsersContainer>
        {data.users && data.users.map(user => {
          if (user._id !== loggedUser._id)
            return (
              <User onClick={() => history.push(`/${user.username}`)} key={user._id}>
                <UserPic src={user.userPic} />
                <Name>{user.name}</Name>
                <Username>@{user.username}</Username>
              </User>
            )
          
          return null
        })}
      </UsersContainer>
    </RecommendedContainer>
  )
}

export default RecommendedUsers