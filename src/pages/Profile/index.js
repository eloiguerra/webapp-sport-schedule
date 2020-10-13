import React, {useState, useEffect} from 'react'

import api from '../../services/api';

import Container from './styles';
import NavBarHome from '../../components/NavBars/NavBarHome';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileTabs from '../../components/ProfileTabs';

export default function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = () => {
      api.get('/users')
      .then(response => {
        setUser(response.data);
      })
      .catch(err => {
        console.log(err);
      })
    }

    getUser();
  }, []);

  return (
    <>
    <NavBarHome />
    {user.profile_photo &&
      <Container>
        <ProfileHeader user = {user}/>
        <ProfileTabs userId = {user._id}/>
      </Container>
    }
    </>
  )
}
