import React from 'react'

import Container from './styles';

import useForm from '../../hooks/useForm';

import api from '../../services/api';

import NavBarHome from '../../components/NavBars/NavBarHome';
import PostContainer from '../../components/PostContainer';

export default function Home(props) {
  const [{values}, handleChange, handleSubmit] = useForm();

  return (
    <>
    <NavBarHome />
      <Container>

      <PostContainer />
      {/* <form onSubmit = {handleSubmit(searchUsers)}>
        <input
          type = "text"
          name = "full_name"
          onChange = {handleChange}
        />
        <button type = "submit">Fazer amiguinhos</button>
      </form> */}
      </Container>
    </>
  )
}
