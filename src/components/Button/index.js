import React from 'react'

import { ButtonContainer } from './styles'

function Button({ type, label, disabled, onClick }) {
  return (
    <ButtonContainer
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </ButtonContainer>
  )
}

export default Button