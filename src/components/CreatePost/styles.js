import styled from 'styled-components'

export const CreatePostForm = styled.form`
  width: 100%;
  margin-bottom: 15px;
  background-color: white;
  border: 0;
  border-radius: 10px;
  padding: 8px;
`

export const TextInput = styled.textarea`
  width: 100%;
  height: 70px;
  padding: 5px;
  border: 0;
  border-radius: 10px;
  resize: none;
`

export const ImageInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ImageInput = styled.input`
  display: none;
`