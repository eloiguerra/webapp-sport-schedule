import React, {useState} from 'react'
import { Container } from './styles'

import logo from '../../assets/images/miniLogo.png';

import useForm from '../../hooks/useForm';
import {login} from '../../utils/auth';

import {
  faEnvelope,
  faLock
} from '@fortawesome/free-solid-svg-icons';

import api from '../../services/api';

import NavLink from '../../components/NavLink';
import InputBlock from '../../components/InputBlock';
import InputButton from '../../components/Buttons/InputButton';
import Toast from '../../components/Toast';

export default function Login(props) {
  const [{values}, handleChange, handleSubmit] = useForm();
  const [errors, setErrors] = useState([]);
  const [toast, setToast] = useState({});

  const loginValidation = () => {
    const {email, password} = values;

    let validations = {};
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!email){
      validations.email = 'Campo obrigatório';
    }
    else if(email.length < 6){
      validations.email = 'Email muito curto';
    }
    else if(email.length > 40){
      validations.email = 'Email muito longo';
    }
    else{
      if(!regexEmail.test(String(email).toLowerCase())){
        validations.email = 'Email inválido';
      }
    }

    if(!password){
      validations.password = 'Campo obrigatório';
    }
    else if(password.length < 8){
      validations.password = 'Senha muito curta';
    }
    else if(password.length > 16){
      validations.password = 'Senha muito longa';
    }

    validations.email || validations.password
    ? setErrors(validations)
    : api.post('/login', {
        email,
        password,
      }).then(response => {
        login(response);
        props.history.push('/home');
      }).catch(err => {
        setToast({
          type: 'error',
          title: 'Erro ao tentar logar',
          message: 'Email ou senha inválidos',
          visible: true
        });
      })
  }

  return (
    <Container>
      <div className = "image-container"></div>
      <div className = "form-container">
        <form onSubmit = {handleSubmit(loginValidation)}>
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
          <InputButton type = "submit" text = {'Acessar'} />

          <NavLink text = "Criar uma conta?" path = "/register" />
        </form>
      </div>
      {toast.visible &&
        <Toast
          type = {toast.type}
          title = {toast.title}
          message = {toast.message}
        />
      }
    </Container>
  )
}
