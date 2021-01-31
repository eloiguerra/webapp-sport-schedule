import React, {useState, useEffect} from 'react';

import {
  Container, Option, OptionsList,
  ContainerPublications, ContainerFriends,
  FriendCard,
  ContainerFriendsCard
} from './styles';
import Feed from '../Feed';
import api from '../../services/api';
import NavLink from '../NavLink';

export default function ProfileTabs({user}) {
  const [friends, setFriends] = useState([]);
  const [togglePublicationsTab, setTogglePublicationsTab] = useState(true);
  const [toggleFriendsTab, setToggleFriendTab] = useState(false);

  const displayPublicationsTab = () => {
    setTogglePublicationsTab(true);
    setToggleFriendTab(false);
  }

  const displayFriendTab = () => {
    setToggleFriendTab(true);
    setTogglePublicationsTab(false);
  }

  useEffect(() => {
    api.get('/friends')
    .then(response => {
      setFriends(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, [])

  return (
    <Container>
      <OptionsList>
        <Option
          onClick = {displayPublicationsTab}
        > Linha do tempo </Option>
        <Option
          onClick = {displayFriendTab}
        > Amigos </Option>
      </OptionsList>
      {togglePublicationsTab &&
         <ContainerPublications>
           <Feed user = {user} by = 'owner' />
         </ContainerPublications>
      }
      {toggleFriendsTab &&
        <ContainerFriends>
          <h2>Amizades</h2>
          <ContainerFriendsCard>
            {
              friends.map(friend => (
                <FriendCard key = {friend._id}>
                  <img src = {friend.profile_photo.url} alt = "" />
                  <NavLink
                    text = {friend.full_name}
                    path = {`/users/${friend._id}`}
                  />
                </FriendCard>
              ))
            }
          </ContainerFriendsCard>
        </ContainerFriends>
      }
    </Container>
  )
}
