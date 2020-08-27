import React, {useState} from 'react'
import Container, {ToggleNavBar} from './styles';

import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faBars,
} from '@fortawesome/free-solid-svg-icons';

import logo from '../../../assets/images/miniLogo.png';

export default function NavBarIndex({logout}) {
  const [visibleNavBar, setVisibleNavBar] = useState(false);

  const handleVisibleNavBar = () => setVisibleNavBar(!visibleNavBar);

  return (
    <>
      <Container visible = {visibleNavBar}>
        <div className = "logo">
          <img src = {logo} alt = ""/>
          <p> SportSchedule </p>
        </div>
        <ToggleNavBar onClick = {handleVisibleNavBar}>
          <FontAwesomeIcon icon = {faBars}/>
        </ToggleNavBar>
        <div className = "navbar-links">
          <ul>
            <li> <Link to = '/login'> Fazer login </Link> </li>
            <li> <Link to = '/register'> Criar conta </Link></li>
          </ul>
        </div>
      </Container>
    </>
  )
}
