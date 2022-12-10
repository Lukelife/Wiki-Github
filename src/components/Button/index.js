import React from 'react'

import { ButtonContainer } from './styles';

function Button({onClick}) {
  return (
    <ButtonContainer onClick={onClick}>
      <h3>Buscar</h3>
    </ButtonContainer>
  )
}

export default Button
