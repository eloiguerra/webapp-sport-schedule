import React, {useState, useEffect, useRef} from 'react'

import { Container, Content, FormContainer } from './styles'

import api from '../../services/api';
import useForm from '../../hooks/useForm';

import Modal from '../Modals';
import Textarea from '../Textarea';
import InputButton from '../Buttons/InputButton';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faImage
} from '@fortawesome/free-solid-svg-icons';

export default function PostBox({user}) {
  const imageInputRef = useRef(null);

  const [{values}, handleChange, handleSubmit] = useForm();
  const [errors, setErros] = useState({});
  const [modalPostVisible, setModalPostVisible] = useState(false);
  const [sports, setSports] = useState([]);
  const [publication, setPublication] = useState({});

  const newPost = async () => {
    const {sport, description} = values;
    const image = imageInputRef.current?.files;

    let validations = {};

    if(!(image[0] || description)){
      validations.imageDescription = "Obrigatório imagem ou texto";
    }
    // .toLowerCase().chartAt(0).toUpperCase() depois testa
    if(!sport){
      validations.sport = "Campo obrigatório";
    }

    let validSport = sports.filter(item => item.name === sport);
    if(!validSport.length){
      validations.sport = "Esporte não encontrado";
    }

    console.log(validations);
    console.log(description);

    if(validations.sport || validations.imageDescription){
      setErros(validations)
    }
    else{
      if(image[0] && !description){
        const formFile = new FormData();
        formFile.append('file', image[0]);

        const {data} = await api.post('/files', formFile);

        await api.post('/publications', {
          sport: validSport[0]._id,
          description: null,
          image: data._id
        })
      }
      else if(description && !image[0]){
        await api.post('/publications', {
          sport: validSport[0]._id,
          description,
          image: null
        })
      }
      else{
        const formFile = new FormData();
        formFile.append('file', image[0]);
        const {data} = await api.post('/files', formFile);

        await api.post('/publications', {
          sport: validSport[0]._id,
          description,
          image: data._id
        })
      }
    }
  }

  const handleImage = () => {
    const image = imageInputRef.current?.files;
    const reader = new FileReader();

    if(image[0]){
      reader.onload = () => {
        if(reader.readyState === 2){
          setPublication({
            preview: reader.result,
            name: image[0].name,
            size: image[0].size
          });
        }
      }
      reader.readAsDataURL(image[0]);
    }
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
            {publication.preview &&
              <img
                src = {publication.preview}
                alt = ""
                className = "preview"
              />
            }
            <div className = "add-options">
              <label>
                <FontAwesomeIcon icon = {faImage} />
                <input
                  ref = {imageInputRef}
                  type = "file"
                  onChange = {handleImage}
                  accept = "image/*"
                />
              </label>
            </div>
            <InputButton type = "submit" text = "Publicar"/>
          </FormContainer>
        </div>
      </Modal>
    }
    </>
  )
}
