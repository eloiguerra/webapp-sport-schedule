import React, {useEffect, useState} from 'react'

import {useHistory} from 'react-router-dom';
import {logout} from '../../../utils/auth';

import NavLink from '../../NavLink';
import Container, {Hamburguer, FullScreenModal} from './styles';


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
  faArrowLeft,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons';

import logo from '../../../assets/images/miniLogo.png';
import SearchBox from '../../SearchBox';
import api from '../../../services/api';

export default function NavBarHome() {
  const history = useHistory();
  const [visibleSideBar, setVisibleSideBar] = useState(true);
  const [visibleDropdownConfig, setVisibleDropdownConfig] = useState(false);
  const [visibleMobileDropdownConfig, setVisibleMobileDropdownConfig] = useState(false);
  const [visibleMobileSearch, setVisibleMobileSearch] = useState(false);
  const [visibleNotification, setVisibleNotification] = useState(false);
  const [visibleMobileNotification, setVisibleMobileNotification] = useState(false);
  const [notifications, setNotitications] = useState([]);

  const toggleSideBar = () => setVisibleSideBar(!visibleSideBar);
  const toggleDropdownConfig = () => setVisibleDropdownConfig(!visibleDropdownConfig);
  const toggleMobileDropdownConfig = () => setVisibleMobileDropdownConfig(!visibleMobileDropdownConfig);
  const toggleNotification = () => setVisibleNotification(!visibleNotification);
  const goToHome = () => history.push('/home');
  const [updateNotifications, setUpdateNotifications] = useState(false);

  useEffect(() => {
    api.get('/notifications')
    .then(response => {
      setNotitications(response.data)
      // console.log(response)
    })
    .catch(response => {
      console.log(response);
    })
  }, [updateNotifications]);

  const exit = () => {
    logout();
    history.push('/');
  }

  const acceptFriendRequest = id => {
    api.put('/friends', {id})
    .then(response => {
      // console.log(response);
      setUpdateNotifications(!updateNotifications);
    })
    .catch(err => {
      console.log(err);
    })
  }

  const removeFriend = id => {
    console.log(id)
    api.delete(`/friends/${id}`)
    .then(response => {
      // console.log(response);
      setUpdateNotifications(!updateNotifications);
    })
    .catch(err => {
      console.log(err)
    })
  }

  const verifyNotification = notification => {
    switch (notification.type) {
      case 1:
        return (
          <div className = "info-container">
             <NavLink
              path = {`/users/${notification?.requester?._id}`}
              text = {`Solicitação de amizade de ${notification?.requester?.full_name}`}
            />
            <div className = "buttons">
              <button
                className = "accept"
                onClick = {() => acceptFriendRequest(notification?.requester?._id)}
              >
                Aceitar
              </button>
              <button
                className = "refuse"
                onClick = {() => removeFriend(notification?.requester?._id)}
              >
                Recusar
              </button>
            </div>
          </div>
        )
      default:
        break;
    }
  }

  return (
    <>
    <Container
      visible = {visibleSideBar}
      visibleDropdownConfig = {visibleDropdownConfig}
      visibleMobileDropdownConfig = {visibleMobileDropdownConfig}
      visibleNotification = {visibleNotification}
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
            <li onClick = {toggleNotification}>
              <FontAwesomeIcon icon = {faBell} />
              <ul className = "notifications">
                {notifications.map(notification => (
                  <li key = {notification?._id}>
                    <img src = {notification?.requester?.profile_photo.url} alt = "" />
                    {verifyNotification(notification)}
                  </li>
                ))}
              </ul>
            </li>
            <li onClick = {toggleDropdownConfig}>
              <FontAwesomeIcon icon = {faCog} />
               <ul className = "dropdown-config">
                <li onClick = {toggleNotification}>
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
         {/*  <li>
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
          </li> */}
          <li className = "mobile-modal">
            <button
              onClick = {() => setVisibleMobileNotification(true)}
              className = "icon"
            >
              <FontAwesomeIcon icon = {faBell} />
            </button>
          </li>
          <li className = "mobile-modal">
            <button
              onClick = {() => setVisibleMobileSearch(true)}
              className = "icon"
            >
              <FontAwesomeIcon icon = {faSearch} />
            </button>
          </li>
          <li className = "mobile-modal">
            <button
              onClick = {toggleMobileDropdownConfig}
              className = "icon"
            >
              <FontAwesomeIcon icon = {faEllipsisV} />
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
            </button>
          </li>
        </ul>
      </div>
    </Container>

    <FullScreenModal visible = {visibleMobileSearch}>
      <div className = "header">
        <button onClick = {() => setVisibleMobileSearch(false)}>
          <FontAwesomeIcon icon = {faArrowLeft} />
        </button>
        <SearchBox />
      </div>
    </FullScreenModal>

    <FullScreenModal visible = {visibleMobileNotification}>
      <div className = "header">
        <button onClick = {() => setVisibleMobileNotification(false)}>
          <FontAwesomeIcon icon = {faArrowLeft} />
        </button>
      </div>
      {notifications.map(notification => (
        <div className = "content" key = {notification?._id}>
          <img src = {notification?.requester?.profile_photo.url} alt = "" />
          {verifyNotification(notification)}
        </div>
      ))}
    </FullScreenModal>
  </>
  )
}
