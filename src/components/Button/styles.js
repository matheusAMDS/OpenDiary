import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background-color: royalblue;
  padding: 5px;
  border: 0;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin: 0 5px;

  :disabled {
    display: none;
  }
`