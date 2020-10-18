import React, {useState, useEffect} from 'react';

import io from 'socket.io-client';
import api from '../../services/api';

import NavBarHome from '../../components/NavBars/NavBarHome';
import {Container, ChatWrapper, ChatBox, Friends} from './styles';

import sendButton from '../../assets/images/send-button.svg';

let socket;

export default function Chat() {
  const [friends, setFriends] = useState([]);
  const [friend, setFriend] = useState('');


  useEffect(() => {
    api.get('/friends')
    .then(response => {
      setFriends(response.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  useEffect(() => {
    socket = io(process.env.REACT_APP_ENDPOINT);

    socket.emit('join', {friend});

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [friend])

  return (
    <>
    <NavBarHome />
    <Container>
      <ChatWrapper>
        <ChatBox>
          <div className = "messages">

          </div>
          <div className = "sender">
            <textarea />
            <button type = "button">
              <img src = {sendButton} alt = "" />
            </button>
          </div>
        </ChatBox>
        <Friends>
          <ul>
            {friends.map(item => (
              <li key = {item._id}>
                <img src = {item.profile_photo.url} alt = ""/>
                <p onClick = {() => setFriend(item._id)}>
                  {item.full_name}
                </p>
              </li>
            ))}
          </ul>
        </Friends>
      </ChatWrapper>
    </Container>
    </>
  )
}
