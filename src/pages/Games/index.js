import React from 'react';

import NavBarHome from '../../components/NavBars/NavBarHome';
import {Container} from './styles';

import {
  GoogleMap,
  useLoadScript,
} from '@react-google-maps/api';

import useMap from '../../hooks/useMap';

const libraries = ["places"];
const containerStyle = {
  width: '300px',
  height: '300px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export default function Games() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const map = useMap();
  const {mapError, currentCordinates} = map;

  return (
    <>
      <NavBarHome />
      <Container>
        {mapError ?
          <div className = "map-erro-container">

          </div>
        :
          isLoaded &&
            <GoogleMap
              mapContainerStyle = {containerStyle}
              zoom = {8}
              center = {center}
            >
            </GoogleMap>
        }
      </Container>
    </>
  )
}
