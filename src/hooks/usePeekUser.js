import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'

import { PEEK_USER, UNPEEK_USER } from '../operations/mutation'

function usePeekUnpeek(targetUser, loggedUserId) {
  const [ peeking, setPeeking ] = useState(targetUser.peekedBy.includes(loggedUserId))

  const [ peek ] = useMutation(PEEK_USER, {
    variables: { toUser: targetUser.username },
    onCompleted(_) {
      setPeeking(true)
    }
  })
  const [ unpeek ] = useMutation(UNPEEK_USER, {
    variables: { toUser: targetUser.username },
    onCompleted(_) {
      setPeeking(false)
    }
  })

  return [ peeking, peek, unpeek ]
}

export default usePeekUnpeek