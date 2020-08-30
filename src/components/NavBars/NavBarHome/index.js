import React, {useState} from 'react'
import Container from './styles';

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

export default function NavBarHome({logout}) {
  const [visibleSideBar, setVisibleSideBar] = useState(false);
  const [visibleDropdownConfig, setVisibleDropdownConfig] = useState(false);

  const toggleSideBar = () => setVisibleSideBar(!visibleSideBar);
  const toggleDropdownConfig = () => setVisibleDropdownConfig(!visibleDropdownConfig);

  return (
    <Container
      visible = {visibleSideBar}
      visibleDropdownConfig = {visibleDropdownConfig}
    >
      <div className = "top-navbar">
        <div onClick = {toggleSideBar} className = "hamburguer">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className = "top-menu">
          <div className = "logo-container">
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
                 <li onClick = {logout}>
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
            <span className = "icon"> <FontAwesomeIcon icon = {faUser} /> </span>
            <span className = "title"> Meu perfil </span>
          </li>
        </ul>
      </div>
    </Container>
  )
}
