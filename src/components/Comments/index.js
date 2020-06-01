import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'

import Loading from '../Loading'
import Button from '../Button'
import CommentCard from '../CommentCard'

import { CREATE_COMMENT } from '../../operations/mutation'
import { GET_COMMENTS } from '../../operations/query'
import {
  CommentsContainer,
  CreateComment
} from './styles'

function Comments({ postId }) {
  const [ newComment, setNewComment ] = useState("")
  const [ comments, setComments ] = useState([])

  const [ createComment ] = useMutation(CREATE_COMMENT, {
    variables: {
      text: newComment,
      to: postId
    },
    onCompleted({ createComment }) {
      setComments([ createComment ].concat(comments))
    }
  })
  const { loading } = useQuery(GET_COMMENTS, {
    variables: { postId }, 
    fetchPolicy: "network-only",
    onCompleted({ comments }) {
      setComments(comments)
    }
  })

  if (loading) return <Loading />

  return (
    <CommentsContainer>
      { comments.length === 0
        ? <p>No comments to display</p>
        : comments.map(comment => (
          <CommentCard comment={comment} key={comment._id} />
        )
      )}
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          createComment()
        }}>
          <CreateComment
            placeholder="Write a comment about this"
            onChange={e => setNewComment(e.target.value)}
          />
          <Button
            type="submit"
            label="Comment"
          />
        </form>
        
      </div>
    </CommentsContainer>
  )
}

export default Comments