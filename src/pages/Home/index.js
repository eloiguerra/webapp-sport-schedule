import React, {useState, useEffect} from 'react'

import Container from './styles';

import api from '../../services/api';

import NavBarHome from '../../components/NavBars/NavBarHome';
import PostBox from '../../components/PostBox';

export default function Home() {
  const [user, setUser] = useState({});

  useEffect(() => {
    api.get('/users')
    .then(response => {
      console.log(response);
      setUser(response.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <>
    <NavBarHome />
      <Container>
        {user.profile_photo &&
          <PostBox user = {
            {name: user.full_name,
              profile_photo: user.profile_photo.url
            }}
          />
        }

      </Container>
    </>
  )
}
