import React, {useState, useRef, useEffect} from 'react';

import api from '../../services/api';
import useForm from '../../hooks/useForm';

import {Header, FormDescription, FormPhoto} from './styles';
import LinkButton from '../../components/Buttons/LinkButton';
import Textarea from '../../components/Textarea';
import Modal from '../../components/Modals';
import DragDropBox from '../../components/DragDropBox';
import InputButton from '../../components/Buttons/InputButton';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCameraRetro, faImage} from '@fortawesome/free-solid-svg-icons';

export default function ProfileHeader({user}) {
  const [userData, setUserData] = useState(user);
  const [{values}, handleChange, handleSubmit] = useForm();
  const [modalDescriptionVisible, setModalDescriptionVisible] = useState(false);
  const [modalPhotoVisible, setModalPhotoVisible] = useState(false);

  const profilePhotoInputRef = useRef(null);

  const [profilePhoto, setProfilePhoto] = useState({});

  const handleProfilePhoto = () => {
    const profilePhotoData = profilePhotoInputRef.current?.files;
    const reader = new FileReader();

    if(profilePhotoData[0]){
      reader.onload = () => {
        if(reader.readyState === 2){
          setProfilePhoto({
            preview: reader.result,
            name: profilePhotoData[0].name,
            size: profilePhotoData[0].size
          });
        }
      }
      reader.readAsDataURL(profilePhotoData[0]);
    }
    else{
      setProfilePhoto({
        name: "",
        size: ""
      })
    }
  }

  const formPhoto = () => {
    const profilePhotoData = profilePhotoInputRef.current?.files;
    const data = new FormData();
    data.append('file', profilePhotoData[0])

    api.put('/changeProfilePhoto', data)
    .then(response => {
      setUserData({...userData, profile_photo: response.data});
      setModalPhotoVisible(false);
    })
    .catch(err => {
      console.log(err);
    })
  }

  const formDescription = () => {
    const {description} = values;

    api.put('/users', {
      description
    }).then(response => {
      console.log(response);
    }).catch(err => {
      console.log(err);
    })
  }

  // useEffect(() => {

  // }, [userData, user]);

  return (
    <>
    <Header>
      <div className = "photo-container">
        <img
          onClick = {() => setModalPhotoVisible(true)}
          className = 'profile-photo'
          src = {userData.profile_photo.url} alt = ""
        />
        <button onClick = {() => setModalPhotoVisible(true)}>
          <FontAwesomeIcon icon = {faCameraRetro}/>
        </button>
      </div>
      <h3>{userData.full_name}</h3>
      {userData.description
        ? <p>{userData.description}</p>
        : <LinkButton onClick = {() => setModalDescriptionVisible(true)}>
            Adicionar descrição
          </LinkButton>
      }
    </Header>

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

    {modalPhotoVisible &&
      <Modal onClose = {() => setModalPhotoVisible(false)}>
        <h3 className = "head"> Foto de perfil </h3>
        <div className = "body">
          <FormPhoto onSubmit = {handleSubmit(formPhoto)}>
            <div className = "image-container">
              <img
                src = {profilePhoto.preview ? profilePhoto.preview : userData.profile_photo.url}
                alt = ""
              />
            </div>
            <div className = "input-container">
              <label>
                <FontAwesomeIcon icon = {faImage} />
                {profilePhoto.name ? profilePhoto.name : 'Adicionar deste dispositivo'}
                <input
                  ref = {profilePhotoInputRef}
                  type = "file"
                  onChange = {handleProfilePhoto}
                  accept = "image/*"
                />
              </label>
              <DragDropBox file = {profilePhoto} />
            </div>
            <InputButton
              type = "submit"
              text = "Trocar foto"
            />
          </FormPhoto>
        </div>
      </Modal>
    }
    </>
  )
}
