import React from 'react'
import { Container } from './styles'

import useForm from '../../hooks/useForm';

import api from '../../services/api';
import NavLink from '../../components/NavLink';

export default function Login() {
  const [{values}, handleChange, handleSubmit] = useForm();

  const callback = async () => {
    const {email, password} = values;

    await api.post('/login', {
      email,
      password,
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <Container>
      <form onSubmit = {handleSubmit(callback)}>
        <h2>Realizar login</h2>
        <div>
          <input
            type = "text"
            name = "email"
            placeholder = "Email"
            onChange = {handleChange}
          />
        </div>
        <div>
          <input
            type = "password"
            name = "password"
            placeholder = "Senha"
            onChange = {handleChange}
          />
        </div>
        <div>
          <button type = "submit">Acessar</button>
        </div>

        <NavLink text = "Criar uma conta?" path = "/register" />
      </form>
    </Container>
  )
}
