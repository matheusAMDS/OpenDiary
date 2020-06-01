import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import Button from '../../components/Button'
import Loading from '../../components/Loading'
import PostCard from '../../components/PostCard'
import CreatePost from '../../components/CreatePost'
import UserPanel from '../../components/UserPanel'
import RecommendedUsers from '../../components/RecommendedUsers'

import { HOME_FEED_DATA } from '../../operations/query'
import { ContentContainer } from './styles'

function Home() {
  const { data, loading, error, fetchMore } = useQuery(HOME_FEED_DATA, {
    fetchPolicy: "network-only"
  })

  if (error) return <h1>{error.message}</h1>
  if (loading) return <Loading />

  return (
    <>
      <UserPanel user={data.me} />
              
      <ContentContainer>
        <h2>Home</h2>
        <CreatePost />
        <RecommendedUsers loggedUser={data.me} />
        { data.feed &&
          data.feed.docs && 
          data.feed.docs.length === 0
            ? <p>No activity to display. Write a post to start!</p>
            : data.feed.docs.map(post => (
                <PostCard post={post} key={post._id} />
              ))
        }
        <Button
          disabled={!data.feed.nextPage}
          label="More Posts"
          onClick={() => fetchMore({
            variables: { page: data.feed.nextPage },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult)
                return prev 
              return {
                ...fetchMoreResult,
                feed: {
                  ...fetchMoreResult.feed,
                  docs: prev.feed.docs.concat(fetchMoreResult.feed.docs)
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

export default Home