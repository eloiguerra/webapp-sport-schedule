import React from 'react'
import { Container } from './styles'
import {
  faEnvelope,
  faLock,
  faUser
} from '@fortawesome/free-solid-svg-icons'

import useForm from '../../hooks/useForm';

import api from '../../services/api';
import {login} from '../../utils/auth';

import NavLink from '../../components/NavLink';
import InputBlock from '../../components/InputBlock';
import InputButton from '../../components/Buttons/InputButton';

export default function Register(props) {
  const [{values}, handleChange, handleSubmit] = useForm();

  const callback = async () => {
    const {full_name, email, password, date_of_birth} = values;

    await api.post('/register', {
      full_name,
      email,
      password,
      date_of_birth
    }).then((response) => {
      props.history.push('/login');
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <Container>
      {/* <img src = {} alt = "" /> */}
      <form onSubmit = {handleSubmit(callback)}>
        <h2>Cadastrar-se</h2>
        <InputBlock
          inputType = "text"
          name = "full_name"
          id = "full_name"
          placeholder = "Nome completo"
          icon = {faUser}
          onChange = {handleChange}
        />
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
        <InputButton type = "submit" text = "Cadastrar"/>

        <NavLink text = "Já tenho uma conta !" path = "/login" />
      </form>
    </Container>
  )
}
