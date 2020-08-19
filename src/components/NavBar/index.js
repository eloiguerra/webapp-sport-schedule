import React from 'react'
import Container from './styles';

import logo from '../../assets/images/miniLogo2.png';

export default function NavBar() {
  return (
    <Container>
      <div className = "logo">
        <img width = "65px" src = {logo} alt = "" />
        <p>SportSchedule</p>
      </div>
      <div className = "tools">
        <ul>
          <li>dasds</li>
        </ul>
      </div>

    </Container>
  )
}
