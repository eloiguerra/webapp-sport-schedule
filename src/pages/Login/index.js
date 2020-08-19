import React from 'react'
import { Container } from './styles'

import useForm from '../../hooks/useForm';

import {
  faEnvelope,
  faLock
} from '@fortawesome/free-solid-svg-icons'

import api from '../../services/api';
import {login} from '../../utils/auth';

import NavLink from '../../components/NavLink';
import InputBlock from '../../components/InputBlock';
import InputButton from '../../components/Buttons/InputButton';

export default function Login(props) {
  const [{values}, handleChange, handleSubmit] = useForm();

  const callback = async () => {
    const {email, password} = values;

    await api.post('/login', {
      email,
      password,
    }).then((response) => {
      login(response);
      props.history.push('/home');
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <Container>
      <form onSubmit = {handleSubmit(callback)}>
        <h2>Realizar login</h2>
        <InputBlock
          inputType = "text"
          name = "email"
          id = "email"
          placeholder = "Email"
          icon = {faEnvelope}
          onChange = {handleChange}
        />
        <InputBlock
          inputType = "password"
          name = "password"
          id = "password"
          placeholder = "Senha"
          icon = {faLock}
          onChange = {handleChange}
        />

        <InputButton type = "submit" text = "Acessar" />

        <NavLink text = "Criar uma conta?" path = "/register" />
      </form>
    </Container>
  )
}
