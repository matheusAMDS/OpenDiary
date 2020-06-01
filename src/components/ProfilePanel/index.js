import React, { useState } from 'react'
import Button from '../Button'

import { getUserId } from '../../lib/User'
import usePeekUser from '../../hooks/usePeekUser'
import {
  UserPanelContainer,
  PeekData,
  UserPic,
  Name,
  Username,
  UserBio,
} from './styles'

function ProfilePanel({ user }) {
  const loggedUserId = getUserId()
  const [ peeking, peek, unpeek ] = usePeekUser(user, loggedUserId)
  const [ peekedByCount, setPeekedByCount ] = useState(user.peekedBy.length)

  return (
    <UserPanelContainer>
      <UserPic src={user.userPic} />
              
      <Name>{user.name}</Name>
      <Username>@{user.username}</Username>

      <UserBio>
        {user.bio === "" ? `Hi, i'm ${user.name}` : user.bio}
      </UserBio>

      <PeekData>
        <span>Peeking {user.peeking.length}</span>
        <span>Peeked by {peekedByCount}</span>
      </PeekData>

      { peeking 
        ? <Button label="Unpeek" onClick={async () => {
            await unpeek()
            setPeekedByCount(peekedByCount - 1)
          }} />
        : <Button label="Peek" onClick={async () => {
            await peek()
            setPeekedByCount(peekedByCount + 1)
          }} />
      }
    </UserPanelContainer>
  )
}

export default ProfilePanel