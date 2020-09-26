import React, {useEffect, useState, useCallback} from 'react'

import {useParams} from 'react-router-dom';

import api from '../../services/api';

import NavBarHome from '../../components/NavBars/NavBarHome';
import {Container} from './styles';

export default function VisitProfile() {
  const {id} = useParams();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    api.post('');
  }, [])

  return (
    <>
    <NavBarHome />
    <Container>
      oi casada
    </Container>
    </>
  )
}
