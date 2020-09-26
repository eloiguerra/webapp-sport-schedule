import React, {useState, useEffect} from 'react'

import useForm from '../../hooks/useForm';

import Container, {FormDescription, Header} from './styles';
import NavBarHome from '../../components/NavBars/NavBarHome';
import Textarea from '../../components/Textarea';
import Modal from '../../components/Modals';

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
      .then(response => (
        setUser(response.data)
      ))
      .catch(err => (
        console.log(err)
      ))
    }
    getUser();
  }, []);

  return (
    <>
    <NavBarHome />
    <Container>
        {console.log(user)}
      <Header>
        <div className = "info">
          <img className = 'profile-photo' src = "https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg" alt = "" />
          <h3>{user.full_name}</h3>
          {user.description
            ? <p>{user.description}</p>
            : <button onClick = {() => setModalDescriptionVisible(true)}>
                Adicionar descrição
              </button>
          }
        </div>
        {console.log(user)}
      </Header>
    </Container>
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
