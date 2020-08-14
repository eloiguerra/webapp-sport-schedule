import React from 'react'
import { Container } from './styles'

import useForm from '../../hooks/useForm';

import api from '../../services/api';
import NavLink from '../../components/NavLink';

export default function Register() {
  const [{values}, handleChange, handleSubmit] = useForm();

  const callback = async () => {
    const {full_name, email, password, date_of_birth} = values;

    await api.post('/register', {
      full_name,
      email,
      password,
      date_of_birth
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <Container>
      <form onSubmit = {handleSubmit(callback)}>
        <h2>Cadastrar-se</h2>
        <div>
          <input
            type = "text"
            name = "full_name"
            placeholder = "Nome completo"
            onChange = {handleChange}
          />
        </div>
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
          <label>Data de nascimento: </label>
          <input type = "date"
            name = "date_of_birth"
            onChange = {handleChange}
          />
        </div>
        <div>
          <button type = "submit">Cadastrar</button>
        </div>

        <NavLink text = "Já tenho uma conta !" path = "/login" />
      </form>
    </Container>
  )
}
