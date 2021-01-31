import React, {useEffect, useState} from 'react'

import {useParams} from 'react-router-dom';

import api from '../../services/api';

import NavBarHome from '../../components/NavBars/NavBarHome';
import Card from '../../components/Card/';
import Feed from '../../components/Feed/';
import {Container, Header, Button} from './styles';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';

export default function VisitProfile() {
  const {id} = useParams();
  const [userData, setUserData] = useState({});
  const [publications, setPublications] = useState({});
  const [updateUserData, setUpdateUserData] = useState(false)

  useEffect(() => {
    api.get(`/visit/${id}`)
    .then(response => {
      // console.log(response);
      setUserData(response.data);
    })
    .catch(err => {
      console.log(err);
    });
  }, [id, updateUserData])

  useEffect(() => {
    api.get(`/visitedPublications/${id}`)
    .then(response => {
      // console.log(response);
      setPublications(response.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  const sendFriendRequest = () => {
    api.post('/friends', {id})
    .then(response => {
      const friendship = response.data;
      setUserData({...userData, friendship})
    })
    .catch(err => {
      console.log(err);
    })
  }

  const acceptFriendRequest = () => {
    api.put('/friends', {id: userData.friendship.requester})
    .then(response => {
      setUpdateUserData(!updateUserData);
    })
    .catch(err => {
      console.log(err);
    })
  }

  const removeFriend = () => {
    api.delete(`/friends/${id}`)
    .then(response => {
      setUpdateUserData(!updateUserData)
    })
    .catch(err => {
      console.log(err)
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
        {(userData.friendship?.status === 0 || !userData.friendship?.status) &&
          <h3>Deseja adicionar {userData.full_name} ? </h3>
        }
        {(userData.friendship?.status === 0 || !userData.friendship?.status) &&
          <Button onClick = {sendFriendRequest}>
            <FontAwesomeIcon icon = {faUserPlus} />
            Adicionar
          </Button>
        }
        {userData.friendship?.status === 1 &&
           <Button>
             Solicitação de amizade pendente
           </Button>
        }
        {userData.friendship?.status === 2 &&
          <Button onClick = {acceptFriendRequest}>
            <FontAwesomeIcon icon = {faUserPlus} />
            Aceitar solicitação de amizade?
          </Button>
        }
        {userData.friendship?.status === 3 &&
          <Button onClick = {removeFriend}>
            Remover amizade
          </Button>
        }
        {console.log(publications)}
      </Card>
      {publications && <Feed by = 'visited' id = {id} user = {{...userData, ...publications}} />}
    </Container>
    </>
  )
}
