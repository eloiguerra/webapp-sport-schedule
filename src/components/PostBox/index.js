import React, {useState, useEffect} from 'react'

import { Container, Content, FormContainer } from './styles'

import api from '../../services/api';
import useForm from '../../hooks/useForm';

import Modal from '../Modals';
import Textarea from '../Textarea';
import InputButton from '../Buttons/InputButton';

export default function PostBox({user}) {
  const [{values}, handleChange, handleSubmit] = useForm();
  const [errors, setErros] = useState({});

  const [modalPostVisible, setModalPostVisible] = useState(false);
  const [sports, setSports] = useState();

  const newPost = () => {
    const {sport, description} = values;
    let validations = {};

    // .toLowerCase().chartAt(0).toUpperCase() depois testa
    if(!sport){
      validations.sport = "Campo obrigatório";
    }

    let validSport = sports.filter(item => item.name === sport);
    if(!validSport[0]._id){
      validations.sport = "Esporte não encontrado";
    }

    if(!description){
      validations.description = "Campo obrigatório";
    }

    validations.sport || validations.description
    ? setErros(validations)
    : api.post('/publications', {
        sport: validSport[0]._id,
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
        <img src = {user.profile_photo} alt = "" />
        <input disabled type = "text" value = "Criar uma nova publicação?"/>
      </Content>
    </Container>

    {modalPostVisible &&
      <Modal onClose = {() => setModalPostVisible(false)}>
        <h3 className = "head">Criar uma nova publicação</h3>
        <div className = "body">
          <FormContainer onSubmit = {handleSubmit(newPost)}>
            <header>
              <div className = "user-info">
                <img src = {user.profile_photo} alt = "" />
                {user.name}
              </div>
              <input
                type = "text"
                list = "sport-list"
                placeholder = "Esporte"
                name = "sport"
                autoComplete = "off"
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
