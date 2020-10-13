import React, {useEffect, useState} from 'react'

import {useParams} from 'react-router-dom';

import api from '../../services/api';

import NavBarHome from '../../components/NavBars/NavBarHome';
import Card from '../../components/Card/';
import {Container, Header, Button} from './styles';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';

export default function VisitProfile() {
  const {id} = useParams();
  const [userData, setUserData] = useState({});
  const [friendData, setFriendData] = useState({});

  useEffect(() => {
    api.get(`/visit/${id}`)
    .then(response => {
      console.log(response);
      setUserData(response.data);
    })
    .catch(err => {
      console.log(err);
    });
  }, [id])

  useEffect(() => {
    api.get(`/friends/${id}`)
    .then(response => {
      console.log(response);
      setFriendData(response.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [id])

  const sendFriendRequest = () => {
    api.post('/friends', {id})
    .then(response => {
      console.log(response);
      setFriendData(response.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  const acceptFriendRequest = () => {
    api.put('/friends', {id: friendData._id})
    .then(response => {
      console.log(response)
      setFriendData(response.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <>
    <NavBarHome />
    <Container>
      {userData.profile_photo &&
        <Header>
            <img
              src = {userData.profile_photo.url}
              alt = ""
              />
            <h3>{userData.full_name}</h3>
            {userData.description && <p>{userData.description}</p>}
          <hr />
        </Header>
      }
      <Card>
        <h3>Deseja adicionar {userData.full_name} ?</h3>
        {friendData.friend_request ?
          friendData.friend === id ?
          <Button>
              Solicitação de amizade pendente
            </Button>
          : <Button onClick = {acceptFriendRequest}>
              <FontAwesomeIcon icon = {faUserPlus} />
              Aceitar solicitação de amizade?
            </Button>
        : friendData === "" ?
          <Button onClick = {sendFriendRequest}>
            <FontAwesomeIcon icon = {faUserPlus} />
            Adicionar
          </Button>
          : <Button>
              Vocês já são amigos
            </Button>
        }
      </Card>
    </Container>
    </>
  )
}
