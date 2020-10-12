import React from 'react'
import {Container, Option, OptionsList} from './styles';

export default function ProfileTabs() {
  return (
    <Container>
      <OptionsList>
        <Option className = "active"> Linha do tempo </Option>
        <Option> Amigos </Option>
      </OptionsList>
    </Container>
  )
}
