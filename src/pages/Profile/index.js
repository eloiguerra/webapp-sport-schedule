import React, {useState, useEffect} from 'react'

import useForm from '../../hooks/useForm';

import Container, {FormDescription, Header} from './styles';
import NavBarHome from '../../components/NavBars/NavBarHome';
import Textarea from '../../components/Textarea';
import Modal from '../../components/Modals';
import LinkButton from '../../components/Buttons/LinkButton';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCameraRetro
} from '@fortawesome/free-solid-svg-icons';

import api from '../../services/api';

export default function Profile() {
  const [{values}, handleChange, handleSubmit] = useForm();

  const [user, setUser] = useState({})
  const [modalDescriptionVisible, setModalDescriptionVisible] = useState(false);

  const formDescription = async () => {
    const {description} = values;

    await api.put('/users', {
      description
    }).then(response => {
      console.log(response);
    }).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    const getUser = async () => {
      await api.get('/users')
      .then(response => {
        setUser(response.data);
      })
      .catch(err => {
        console.log(err)
      })
    }

    getUser();
  }, []);

  return (
    <>
    <NavBarHome />
    {user.profile_photo &&
      <Container>
      <Header>
        <div className = "info">
          <div class = "photo-container">
            <img className = 'profile-photo' src = {user.profile_photo.url} alt = "" />
            <span><FontAwesomeIcon icon = {faCameraRetro}/></span>
          </div>
          <h3>{user.full_name}</h3>
          {user.description
            ? <p>{user.description}</p>
            : <LinkButton onClick = {() => setModalDescriptionVisible(true)}>
                Adicionar descrição
              </LinkButton>
          }
        </div>
      </Header>
      </Container>
    }

    {modalDescriptionVisible &&
      <Modal onClose = {() => setModalDescriptionVisible(false)}>
        <h3 className = "head">Criar uma nova descrição</h3>
        <div className = "body">
          <FormDescription onSubmit = {handleSubmit(formDescription)}>
            <Textarea
              id = "textarea-description"
              label = "Descrição"
              name = "description"
              onChange = {handleChange}
            />
            <button type = "submit">Criar</button>
          </FormDescription>
        </div>
      </Modal>
    }
    </>
  )
}
