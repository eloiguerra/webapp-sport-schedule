import React from 'react'
import {Link} from 'react-router-dom';

import {
  GoogleMap,
  useLoadScript,
} from '@react-google-maps/api';

import logo from '../../assets/images/miniLogo2.png';

import { NavBar, Introduction, ViewAroundMap } from './styles';

const libraries = ["places"];
const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export default function Index() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  })

  return (
    <>
      <NavBar>
        <div>
          <img src = {logo} alt = ""/>
          <p>SportSchedule</p>
        </div>
        <ul>
          <li> <Link to = '/login'> Fazer login </Link> </li>
          <li> <Link to = '/register'><button> Criar conta </button></Link></li>
        </ul>
      </NavBar>
      <Introduction>
        <h1>A SportSchedule leva o jogo até você.</h1>
        <p>
          Com o objetivo de aproximar você ao seu esporte
          ou atividade física predileto, criamos ferramentas para
          encontrar a sua prática preferida !
        </p>
      </Introduction>
      {isLoaded && (
        <ViewAroundMap>
          <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={8}
            center = {center}
          >

          </GoogleMap>
        </ViewAroundMap>
      )}
    </>
  )
}
