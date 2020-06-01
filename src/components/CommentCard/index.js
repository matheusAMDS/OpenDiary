import React from 'react'

import useLike from '../../hooks/useLike'
import { convertToDays } from '../../lib/Date'
import {
  CommentCardContainer,
  CommentContentContainer,
  ByUserPic,
  ByUserName,
  CreatedAt,
  Text,
  Likes
} from './styles'

function CommentCard({ comment }) {
  const [ likes, isLiked, like, dislike ] = useLike("COMMENT", comment, )
  return (
    <CommentCardContainer>
      <ByUserPic src={comment.byUser.userPic} />
      <CommentContentContainer>
        <ByUserName>{comment.byUser.name}</ByUserName>
        <CreatedAt>{convertToDays(comment.createdAt)}</CreatedAt>
        <Text>{comment.text}</Text>
        <Likes>{likes}&nbsp;
          {isLiked 
            ? <span onClick={dislike}>Dislike</span>
            : <span onClick={like}>Like</span>
          }
        </Likes>
      </CommentContentContainer>
    </CommentCardContainer>
  )
}

export default CommentCard