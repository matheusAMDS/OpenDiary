import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { MdPhoto } from 'react-icons/md'

import Button from '../Button'

import { CREATE_POST } from '../../operations/mutation'
import { HOME_FEED_DATA } from '../../operations/query'
import { 
  CreatePostForm, 
  TextInput, 
  ImageInput,
  ImageInputContainer
} from './styles'

function CreatePost() {
  const [ text, setText ] = useState('')
  const [ images, setImages ] = useState([])
  const [ createPost ] = useMutation(CREATE_POST, {
    variables: { text, images },
    refetchQueries: [ { query: HOME_FEED_DATA } ]
  })

  return (
    <CreatePostForm onSubmit={e => {
      e.preventDefault()
      createPost()
    }}>
      <TextInput 
        placeholder="What happened today?" 
        onChange={e => setText(e.target.value)}
      />
      <ImageInputContainer>
        <label htmlFor="image-input">
          <MdPhoto size={22} />
          { Array.from(images).map((image, i) => 
            <span key={i}>{image.name}</span>
          )}
        </label>
        <ImageInput 
          type="file"
          id="image-input"
          multiple
          onChange={e => setImages(e.target.files)}
        />
        <Button type="submit" label="Post"/>
      </ImageInputContainer>
      
    </CreatePostForm>
  )
}

export default CreatePost