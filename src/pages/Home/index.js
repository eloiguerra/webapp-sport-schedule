import React from 'react'

import Container from './styles';

import useForm from '../../hooks/useForm';

import api from '../../services/api';

import {logout} from '../../utils/auth';
import NavBarHome from '../../components/NavBars/NavBarHome';

export default function Home(props) {
  const [{values}, handleChange, handleSubmit] = useForm();

  const disconnect = () => {
    logout();
    props.history.push('/');
  }

  const searchUsers = async () => {
    const {full_name} = values;
    await api.get(`/users/${full_name}`)
    .then(response => {
      console.log(response);
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <Container>
      <NavBarHome logout = {disconnect} />
      {/* <form onSubmit = {handleSubmit(searchUsers)}>
        <input
          type = "text"
          name = "full_name"
          onChange = {handleChange}
        />
        <button type = "submit">Fazer amiguinhos</button>
      </form> */}
    </Container>
  )
}
