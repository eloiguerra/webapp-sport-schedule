import React, {useState, useEffect} from 'react'

import api from '../../services/api';

import Container from './styles';
import NavBarHome from '../../components/NavBars/NavBarHome';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileTabs from '../../components/ProfileTabs';
import PostBox from '../../components/PostBox';

export default function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    api.get('/users')
    .then(response => {
      setUser(response.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <>
    <NavBarHome />
    {user.profile_photo &&
      <Container>
        <ProfileHeader user = {user}/>
        {user.profile_photo &&
          <PostBox className = "center" user = {
            {
              name: user.full_name,
              profile_photo: user.profile_photo.url
            }}
          />
        }
        <ProfileTabs user = {user}/>
      </Container>
    }
    </>
  )
}
