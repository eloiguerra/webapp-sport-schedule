import React, {useState} from 'react'

import {useHistory} from 'react-router-dom';
import {logout} from '../../../utils/auth';

import NavLink from '../../NavLink';
import Container, {Hamburguer, MobileSearch} from './styles';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faBell,
  faCog,
  faUser,
  faDoorOpen,
  faHome,
  faComment,
  faMapMarkedAlt,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';

import logo from '../../../assets/images/miniLogo.png';
import SearchBox from '../../SearchBox';

export default function NavBarHome() {
  const history = useHistory();
  const [visibleSideBar, setVisibleSideBar] = useState(true);
  const [visibleDropdownConfig, setVisibleDropdownConfig] = useState(false);
  const [visibleMobileSearch, setVisibleMobileSearch] = useState(false);

  const toggleSideBar = () => setVisibleSideBar(!visibleSideBar);
  const toggleDropdownConfig = () => setVisibleDropdownConfig(!visibleDropdownConfig);

  const goToHome = () => history.push('/home');

  const exit = () => {
    logout();
    history.push('/');
  }

  return (
    <>
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
            <li className = "search-box">
              <SearchBox />
            </li>
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
                path = "/home"
                icon = {faHome}
              />
            </span>
            <span className = "title">
              <NavLink
                color = "white"
                path = "/home"
                text = "Página inicial"
              />
            </span>
          </li>
          <li>
          <span className = "icon">
              <NavLink
                color = "white"
                path = "/users"
                icon = {faUser}
              />
            </span>
            <span className = "title">
              <NavLink
                color = "white"
                path = "/users"
                text = "Meu perfil"
              />
            </span>
          </li>
          <li>
            <span className = "icon">
              <NavLink
                color = "white"
                path = "/games"
                icon = {faMapMarkedAlt}
              />
            </span>
            <span className = "title">
              <NavLink
                color = "white"
                path = "/games"
                text = "Torneios"
              />
            </span>
          </li>
          <li>
            <span className = "icon">
              <NavLink
                color = "white"
                path = "/chat"
                icon = {faComment}
              />
            </span>
            <span className = "title">
              <NavLink
                color = "white"
                path = "/chat"
                text = "Chat"
              />
            </span>
          </li>
          <li className = "mobile-search">
            <button
              onClick = {() => setVisibleMobileSearch(true)}
              className = "icon"
            >
              <FontAwesomeIcon icon = {faSearch} />
            </button>
          </li>
        </ul>
      </div>
    </Container>

    <MobileSearch visible = {visibleMobileSearch}>
      <div className = "search-bar">
        <button onClick = {() => setVisibleMobileSearch(false)}>
          <FontAwesomeIcon icon = {faArrowLeft} />
        </button>
          <SearchBox />
      </div>
    </MobileSearch>
    </>
  )
}

