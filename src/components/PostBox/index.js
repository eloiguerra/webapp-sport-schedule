import React, {useState, useEffect} from 'react'

import { Container, Content, FormContainer } from './styles'

import api from '../../services/api';
import useForm from '../../hooks/useForm';

import Modal from '../Modals';
import Textarea from '../Textarea';
import InputButton from '../Buttons/InputButton';

export default function PostBox({userData}) {
  const [{values}, handleChange, handleSubmit] = useForm();

  const [modalPostVisible, setModalPostVisible] = useState(false);
  const [sports, setSports] = useState();

  const newPost = () => {
    const {sport, description} = values;
    api.post('/publications', {
      sport,
      description
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    api.get('/sports')
    .then(response => {
      console.log(response);
      setSports(response.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <>
    <Container onClick = {() => setModalPostVisible(true)}>
      <Content>
        {/* <img src = "" /> */}
        <input disabled type = "text" value = "Criar uma nova publicação?"/>
        asd
      </Content>
    </Container>
    {modalPostVisible &&
      <Modal onClose = {() => setModalPostVisible(false)}>
        <h3 className = "head">Criar uma nova publicação</h3>
        <div className = "body">
          <FormContainer onSubmit = {handleSubmit(newPost)}>
            <header>
              {/* <img src = {} /> */}
              {userData.name}
              <input
                type = "text"
                list = "sport-list"
                placeholder = "Esporte"
                name = "sport"
                onChange = {handleChange}
              />
              <datalist id = "sport-list">
                {sports.map(sport => (
                  <option key = {sport._id} value = {sport.name} />
                ))}
              </datalist>
            </header>
            <Textarea
              name = "description"
              onChange = {handleChange}
            />
            <InputButton type = "submit" text = "Publicar"/>
          </FormContainer>
        </div>
      </Modal>
    }
    </>
  )
}
