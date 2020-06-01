import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'

import Button from '../../components/Button'
import UserPanel from '../../components/UserPanel'
import ProfilePanel from '../../components/ProfilePanel'
import PostCard from '../../components/PostCard'
import Loading from '../../components/Loading'

import { getUserId } from '../../lib/User'
import { PROFILE_FEED_DATA } from '../../operations/query'
import { ContentContainer } from './styles'

function Profile() {
  const { username } = useParams()
  const loggedUserId = getUserId()
  const { data, loading, fetchMore } = useQuery(PROFILE_FEED_DATA, {
    variables: { username, page: 1 },
    fetchPolicy: 'network-only'
  })

  if (loading) return <Loading />

  return (
    <>
      { data.user._id === loggedUserId 
        ? <UserPanel user={data.user} />
        : <ProfilePanel user={data.user} />
      }
      <ContentContainer>
        <h2>{data.user.name}</h2>
        { data.profile &&
          data.profile.docs &&
          data.profile.docs.length === 0
            ? <p>No posts to show.</p>
            : data.profile.docs.map(post => (
                <PostCard post={post} key={post._id} />
              ))}
        <Button 
          disabled={!data.profile.nextPage}
          label="More Posts"
          onClick={() => fetchMore({
            variables: { page: data.profile.nextPage },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult)
                return prev 
              return {
                ...fetchMoreResult,
                profile: {
                  ...fetchMoreResult.profile,
                  docs: prev.profile.docs.concat(fetchMoreResult.profile.docs)
                }
              }
            }
          })
          }
        />
      </ContentContainer>
    </>
  )
}

export default Profile