import React,{useState, useEffect} from 'react';

import {Container} from './styles';

import api from '../../services/api';

export default function Feed() {
  const [publications, setPublications] = useState([]);

  window.addEventListener('scroll', () => {
    const {clientHeight, scrollHeight, scrollTop} = document.documentElement;
    const isPageBottomAlmostReached = scrollTop + clientHeight >= scrollHeight - 10;

    if(isPageBottomAlmostReached){
      console.log('calma ae meu camarada tá acabando a página');
    }
  })

  useEffect(() => {
    api.get('/friendsPublications')
    .then(response => {
      console.log(response);
      setPublications(response.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])
  /* const getPublications = () => {
    api.get('/friendsPublications')
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    })
  } */
  return (
    <Container>

    </Container>
  )
}
