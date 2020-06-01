import React, { useState } from 'react'
import { useMutation } from "@apollo/react-hooks"
import { MdEdit } from 'react-icons/md'
import Button from '../Button'

import { UPDATE_BIO, UPDATE_USER_PIC } from '../../operations/mutation'
import {
  UserPanelContainer,
  PeekData,
  UserPic,
  Name,
  Username,
  UserBio,
  UserBioInput,
  UserPicContainer
} from './styles'

function UserPanel({ user }) {
  const [ userPic, setUserPic ] = useState(user.userPic)
  const [ bio, setBio ] = useState(user.bio)
  const [ bioToUpdate, setBioToUpdate ] = useState(user.bio)
  const [ enableBioChange, setEnableBioChange ] = useState(false)

  const [ updateUserPic ] = useMutation(UPDATE_USER_PIC, {
    onCompleted({ updateUserPic }) {
      setUserPic(updateUserPic)
    }
  })
  const [ updateBio ] = useMutation(UPDATE_BIO, {
    onCompleted({ updateBio }) {
      setBio(updateBio)
      setEnableBioChange(false)
    }
  })

  return (
    <UserPanelContainer>
      <UserPicContainer>
        <UserPic src={userPic} />
        <label htmlFor="change-userpic">
          <MdEdit 
            size={19} 
            title="Change user picture" 
            color="royalblue"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
          />
        </label>
        <input
          style={{ display: "none" }}
          id="change-userpic"
          type="file"
          onChange={e => updateUserPic({ variables: { userPic: e.target.files[0] }})}
        />
      </UserPicContainer>
      
      <Name>{user.name}</Name>
      <Username>@{user.username}</Username>

      { enableBioChange
        ? (
          <form onSubmit={e => {
            e.preventDefault()
            updateBio({ variables: { bio: bioToUpdate }})
          }}>
            <UserBioInput 
              defaultValue={bio === "" ? `Hi, i'm ${user.name}` : bio}
              readOnly={!enableBioChange}
              onChange={e => setBioToUpdate(e.target.value)}
            />
            <Button type="submit" label="Change Bio" />
            <Button
              label="Cancel" 
              onClick={() => setEnableBioChange(false)}
            />
          </form>
        ): (
          <UserBio>
            {bio === "" ? `Hi, i'm ${user.name}` : bio}
            <MdEdit
              size={20}
              title="Change user bio"
              color="royalblue"
              onClick={() => {
                setEnableBioChange(true)
              }}
            />
          </UserBio>
        )
      }

      <PeekData>
        <span>Peeking {user.peeking.length}</span>
        <span>Peeked by {user.peekedBy.length}</span>
      </PeekData>
    </UserPanelContainer>
  )
}

export default UserPanel