import React from 'react'
import { Container } from './styles'

import logo from '../../assets/images/miniLogo.png';

import useForm from '../../hooks/useForm';

import {
  faEnvelope,
  faLock
} from '@fortawesome/free-solid-svg-icons';

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
      <div className = "image-container"></div>
      <div className = "form-container">
        <form onSubmit = {handleSubmit(callback)}>
          <div className = "form-head">
            <img src = {logo} alt = "SportSchedule" />
            <p>SportSchedule</p>
          </div>
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
      </div>
    </Container>
  )
}
