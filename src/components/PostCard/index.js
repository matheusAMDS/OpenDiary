import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
import { MdInsertComment } from 'react-icons/md'

import Comments from '../Comments'

import { convertToDays } from '../../lib/Date'
import { getUserId } from '../../lib/User'
import useLikePost from '../../hooks/useLike'
import { 
  PostCardContainer,
  PostMainContainer,
  PostContentContainer, 
  PostDataContainer,
  ByUserName, 
  ByUserPic,
  PostLikes,
  PostCommentsCount,
  ImagesDisplay,
  Image,
  CreatedAt
} from './styles'

function PostCard({ post }) {
  const loggedUserId = getUserId()
  const username = post.byUser.username
  const [ showComments, setShowComments ] = useState(false)
  const [ likes, isLiked, like, dislike ] = useLikePost("POST", post, loggedUserId)

  return (
    <PostCardContainer>
      <PostMainContainer>
        <Link to={`/${username}`}>
          <ByUserPic src={post.byUser.userPic} />
        </Link>
        
        <PostContentContainer>
          <div>
            <Link to={`/${username}`}>
              <ByUserName>{post.byUser.name}</ByUserName>
            </Link>
  
          </div>
          <CreatedAt>{convertToDays(post.createdAt)}</CreatedAt>
          <p to={`/${username}/${post._id}`}>
            {post.text}
          </p>
          
          { post.images.length === 1 
            ? <Image src={post.images[0]} />
            : (
              <ImagesDisplay>
                {post.images && post.images.map(image => (
                  <Image src={image} key={image}/>
                ))}
              </ImagesDisplay>
            )
          }
        </PostContentContainer>
      </PostMainContainer>
      
      <PostDataContainer>
        <PostCommentsCount>
          {post.commentsCount}&nbsp;
          <MdInsertComment
            size={24}
            onClick={() => setShowComments(!showComments)}
            color="royalblue"
          />
        </PostCommentsCount>
        
        { isLiked 
          ? (
            <PostLikes>
              {likes}&nbsp;
              <AiFillLike 
                size={24}
                color="royalblue" 
                onClick={dislike} 
              />
            </PostLikes>
          )
          : (
            <PostLikes>
              {likes}&nbsp;
              <AiOutlineLike 
                size={24}
                color="royalblue" 
                onClick={like} 
              />
            </PostLikes>
          )
        }
      </PostDataContainer>
            
      { showComments
        ? <Comments postId={post._id}/>
        : null
      }
    </PostCardContainer>
  )
}

export default PostCard