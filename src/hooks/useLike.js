import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'

import { LIKE, DISLIKE } from '../operations/mutation'

function useLikeComment(model, doc, userId) {
  const likeArray = doc.likes

  const [ likes, setLikes ] = useState(likeArray.length)
  const [ isLiked, setIsLiked ] = useState(likeArray.includes(userId))

  const variables = {
    to: doc._id,
    model
  }

  const [ like ] = useMutation(LIKE, {
    variables,
    onCompleted({ like }) {
      setIsLiked(true)
      setLikes(like)
    }
  })
  const [ dislike ] = useMutation(DISLIKE, {
    variables,
    onCompleted({ dislike }) {
      setIsLiked(false)
      setLikes(dislike)
    }
  }) 

  return [ likes, isLiked, like, dislike ]
}

export default useLikeComment