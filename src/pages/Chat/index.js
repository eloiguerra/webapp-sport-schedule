import React, {useState, useEffect} from 'react';

import io from 'socket.io-client';
import api from '../../services/api';
import useForm from '../../hooks/useForm';

import NavBarHome from '../../components/NavBars/NavBarHome';
import {Container, ChatWrapper, ChatBox, Friends} from './styles';

import sendButton from '../../assets/images/send-button.svg';

let socket;

export default function Chat() {
  const [{values}, handleChange, handleSubmit] = useForm();

  const [friends, setFriends] = useState([]);
  const [friend, setFriend] = useState('');
  const [messages, setMessage] = useState([]);

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
    if(!friend) return;
    api.get(`/chat/${friend}`)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    })
  }, [friend])

  useEffect(() => {
    socket = io(process.env.REACT_APP_ENDPOINT);

    socket.emit('join', {friend});

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [friend])

  const postMessage = () => {
    const {message} = values;

    api.post('/chat', {message, friend})
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <>
    <NavBarHome />
    <Container>
      <ChatWrapper>
        <ChatBox>
          {friend &&
            <>
            <div className = "messages">
              {/* {messages.length ?
                messages.map(item => (
                  item.
                ))
              } */}
            </div>
            <form onSubmit = {handleSubmit(postMessage)} className = "sender">
              <textarea
                name = "message"
                onChange = {handleChange}
              />
              <button type = "submit">
                <img src = {sendButton} alt = "" />
              </button>
            </form>
            </>
          }
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
