import React, {useState} from 'react'

import {useHistory} from 'react-router-dom';
import {logout} from '../../../utils/auth';

import Container, {Hamburguer} from './styles';

import NavLink from '../../NavLink';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faBell,
  faCog,
  faUser,
  faDoorOpen
} from '@fortawesome/free-solid-svg-icons';

import logo from '../../../assets/images/miniLogo.png';

export default function NavBarHome() {
  const history = useHistory();
  const [visibleSideBar, setVisibleSideBar] = useState(true);
  const [visibleDropdownConfig, setVisibleDropdownConfig] = useState(false);

  const toggleSideBar = () => setVisibleSideBar(!visibleSideBar);
  const toggleDropdownConfig = () => setVisibleDropdownConfig(!visibleDropdownConfig);

  const goToHome = () => history.push('/home');

  const exit = () => {
    logout();
    history.push('/');
  }

  return (
    <Container
      visible = {visibleSideBar}
      visibleDropdownConfig = {visibleDropdownConfig}
    >
      <div className = "top-navbar">
        <Hamburguer onClick = {toggleSideBar} className = "hamburguer">
          <div></div>
          <div></div>
          <div></div>
        </Hamburguer>
        <div className = "top-menu">
          <div className = "logo-container" onClick = {goToHome}>
            <img className = "logo" src = {logo} alt = "" />
            <p>SportSchedule</p>
          </div>
          <ul>
            <li> <FontAwesomeIcon icon = {faSearch} /> </li>
            <li> <FontAwesomeIcon icon = {faBell} /> </li>
            <li onClick = {toggleDropdownConfig}>
              <FontAwesomeIcon icon = {faCog} />
               <ul className = "dropdown-config">
                 <li>
                  <NavLink
                    color = "white" text = "Meu perfil"
                    path = "/users" icon = {faUser}
                  />
                </li>
                 <li onClick = {exit}>
                  <FontAwesomeIcon icon = {faDoorOpen} /> Sair
                </li>
               </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className = "sidebar">
        <ul>
          <li>
            <span className = "icon">
              <NavLink
                color = "white"
                path = "/users"
                icon = {faUser}
              />
            </span>
            <span className = "title">
              Meu perfil
            </span>
          </li>
        </ul>
      </div>
    </Container>
  )
}

