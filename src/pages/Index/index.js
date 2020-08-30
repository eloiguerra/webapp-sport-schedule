import React from 'react'

import {
  GoogleMap,
  useLoadScript,
} from '@react-google-maps/api';

import NavBarIndex from '../../components/NavBars/NavBarIndex';

import {
  Introduction,
  ViewAroundMap,
} from './styles';

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
      <NavBarIndex />
      <Introduction>
        <div>
          <h1>A SportSchedule leva o jogo até você.</h1>
          <p>
            Com o objetivo de aproximar você ao seu esporte
            ou atividade física predileto, criamos ferramentas para
            encontrar a sua prática preferida !
          </p>
        </div>
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
