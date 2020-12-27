import React, {useState} from 'react'
import { Container } from './styles'
import {
  faEnvelope,
  faLock,
  faUser
} from '@fortawesome/free-solid-svg-icons'

import useForm from '../../hooks/useForm';

import api from '../../services/api';

import NavLink from '../../components/NavLink';
import InputBlock from '../../components/InputBlock';
import InputButton from '../../components/Buttons/InputButton';

import logo from '../../assets/images/miniLogo.png';

export default function Register(props) {
  const [{values}, handleChange, handleSubmit] = useForm();
  const [errors, setErrors] = useState({});

  const callback = async () => {
    const {full_name, email, password, date_of_birth} = values;
    let validations = {};
    let regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    if(!full_name){
      validations.full_name = 'Campo obrigatório';
    }
    else if(full_name.length > 60){
      validations.full_name = 'Nome muito longo';
    }
    else if(full_name.length < 3){
      validations.full_name = 'Nome muito curto';
    }

    if(!password){
      validations.password = 'Campo obrigatório';
    }
    else if(password.length > 16){
      validations.password = 'Senha muito longo';
    }
    else if(password.length < 8){
      validations.password = 'Senha muito curta';
    }

    if(!email){
      validations.email = 'Campo obrigatório';
    }
    else if(email.length > 40){
      validations.email = 'Email muito longo';
    }
    else if(email.length < 6){
      validations.email = 'Email muito curto';
    }
    // else{
    //   if(!regexEmail.test(String(email).toLowerCase())){
    //     validations.email = 'Email inválido';
    //   }
    // }

    validations.email || validations.password || validations.full_name
    ? setErrors(validations)
    : await api.post('/register', {
      full_name,
      email,
      password,
      date_of_birth
    }).then(response => {
      props.history.push('/login');
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <Container>
      <form onSubmit = {handleSubmit(callback)}>
        <div className = "form-head">
          <img src = {logo} alt = "SportSchedule" />
          <p>SportSchedule</p>
        </div>
        <h2>Cadastrar-se</h2>
        <InputBlock
          inputType = "text"
          name = "full_name"
          id = "full_name"
          placeholder = "Nome completo"
          icon = {faUser}
          onChange = {handleChange}
          error = {errors.full_name}
        />
        <InputBlock
          inputType = "text"
          name = "email"
          id = "email"
          placeholder = "Email"
          icon = {faEnvelope}
          onChange = {handleChange}
          error = {errors.email}
        />
        <InputBlock
           inputType = "password"
           name = "password"
           id = "password"
           placeholder = "Senha"
           icon = {faLock}
           onChange = {handleChange}
           error = {errors.password}
        />
        <InputButton type = "submit" text = "Cadastrar"/>

        <NavLink text = "Já tenho uma conta !" path = "/login" />
      </form>
    </Container>
  )
}
