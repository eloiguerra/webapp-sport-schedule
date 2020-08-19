import React from 'react'

import Container from './styles';

export default function SideBar() {
  return (
    <Container>
      <ul>
        <li>king crimson</li>
        <li>banana</li>
        <li className = "logout">Sair</li>
      </ul>
    </Container>
  )
}
