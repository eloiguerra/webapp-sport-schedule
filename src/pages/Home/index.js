import React, {useState, useEffect} from 'react'

import Container from './styles';

import api from '../../services/api';

import NavBarHome from '../../components/NavBars/NavBarHome';
import PostBox from '../../components/PostBox';

export default function Home() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    api.get('/users')
    .then(response => {
      setUserData(response.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <>
    <NavBarHome />
      <Container>
        <PostBox userData = {
          {name: userData.full_name,
            profilePhoto: userData.profile_photo
          }}
        />

      </Container>
    </>
  )
}
