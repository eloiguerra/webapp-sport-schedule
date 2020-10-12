import React, {useState} from 'react'

import {useHistory} from 'react-router-dom';
import {logout} from '../../../utils/auth';

import api from '../../../services/api';

import Container, {Hamburguer} from './styles';

import NavLink from '../../NavLink';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faBell,
  faCog,
  faUser,
  faDoorOpen,
  faHome
} from '@fortawesome/free-solid-svg-icons';

import logo from '../../../assets/images/miniLogo.png';

export default function NavBarHome() {
  const history = useHistory();
  const [visibleSideBar, setVisibleSideBar] = useState(false);
  const [visibleDropdownConfig, setVisibleDropdownConfig] = useState(false);
  const [visibleSearchedUsers, setVisibleSearchedUsers] = useState(false);
  const [searchedUsers, setSearchedUsers] = useState([]);

  const toggleSideBar = () => setVisibleSideBar(!visibleSideBar);
  const toggleDropdownConfig = () => setVisibleDropdownConfig(!visibleDropdownConfig);

  const goToHome = () => history.push('/home');

  const getSearch = (e) => {
    api.get(`users/${e.target.value}`)
    .then(response => {
      const {data} = response;
      setSearchedUsers(data);
      setVisibleSearchedUsers(true);
    })
    .catch(err => {
      console.log(err);
    });
  }

  const exit = () => {
    logout();
    history.push('/');
  }

  return (
    <Container
      visible = {visibleSideBar}
      visibleDropdownConfig = {visibleDropdownConfig}
      visibleSearchedUsers = {visibleSearchedUsers}
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
            <li className = "search-bar">
              <input
                onChange = {(e) => getSearch(e)}
                type = "text"
                placeholder = "Buscar..."
              />
              <button><FontAwesomeIcon icon = {faSearch} /></button>
              <ul className = "searched">
                {searchedUsers.length && searchedUsers.map(user => (
                  <li key = {user._id}>
                    <NavLink
                      path = {`/users/${user._id}`}
                      text = {user.full_name}
                    />
                  </li>
                ))}
              </ul>
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
        </ul>
      </div>
    </Container>
  )
}

