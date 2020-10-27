import React, {useState, useCallback, useRef, useEffect} from 'react';

import NavBarHome from '../../components/NavBars/NavBarHome';
import Modal from '../../components/Modals';
import InputBlock from '../../components/InputBlock';
import {Container, FormGame, MapContainer} from './styles';
import SelectSearch from '../../components/SelectSearch';

import {faTrophy} from '@fortawesome/free-solid-svg-icons';

import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from '@react-google-maps/api';

import useMap from '../../hooks/useMap';
import useForm from '../../hooks/useForm';

import api from '../../services/api';

const libraries = ["places"];
const containerStyle = {
  width: '100%',
  height: '100%'
};

export default function Games() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const map = useMap();
  const [{values}, handleChange, handleSubmit] = useForm();

  const {mapError, currentCordinates} = map;
  const center = {
    lat: currentCordinates.lat,
    lng: currentCordinates.lng
  };

  const [sports, setSports] = useState();
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [modalHelpMap, setModalHelpMap] = useState(false);
  const [modalGame, setModalGame] = useState(false);

  useEffect(() => {
    api.get('/sports')
    .then(response => {
      setSports(response.data);
    })
    .catch(response => {
      console.log(response);
    })
  }, [])

  const onMapClick = useCallback(event => {
    setMarkers(prevMarkers => [
      ...prevMarkers,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date()
    }]);
    setModalGame(true);
  }, []);

  const cancelGame = () => {
    setMarkers(prevMarkers => prevMarkers.splice(-1, 1));
    setModalGame(false);
  }

  const newGame = () => {
    console.log(values);
  }

  const mapRef = useRef();

  const onMapLoad = useCallback(map => {
      mapRef.current = map();
  }, []);

  return (
    <>
      <NavBarHome />
      <Container>
        <MapContainer>
          {mapError ?
            <div className = "map-erro-container">

            </div>
          :
            isLoaded &&
              <GoogleMap
                mapContainerStyle = {containerStyle}
                zoom = {16}
                center = {center}
                onClick = {onMapClick}
              >
                {markers.map(marker =>
                  <Marker key = {marker.time.toISOString()}
                    position = {{lat: marker.lat, lng: marker.lng}}
                    onClick = {() => setSelected(marker)}
                  />
                )}

                {selected ?
                <InfoWindow
                  position = {{lat: selected.lat, lng: selected.lng}}
                  onCloseClick = {() => {
                    setSelected(null)
                  }}
                >
                  <div>
                    <h2>Banana fear</h2>
                    <p>King crimson meu caro</p>
                  </div>
                </InfoWindow> : null}
              </GoogleMap>
          }
        </MapContainer>
      </Container>
      {modalGame &&
        <Modal onClose = {cancelGame}>
          <div className = "head">
            <h3>Criar um novo evento</h3>
          </div>
          <div className = "body">
            <FormGame onSubmit = {handleSubmit(newGame)}>
              <InputBlock
                inputType = "text"
                name = "name"
                id = "name"
                placeholder = "Nome do evento"
                icon = {faTrophy}
                onChange = {handleChange}
              />
              <SelectSearch
                data = {sports}
                change = {handleChange}
              />
               <InputBlock
                inputType = "date"
                name = "date"
                placeholder = "Nome do evento"
                onChange = {handleChange}
              />
              <button type = "submit">Enviar</button>
            </FormGame>
          </div>
        </Modal>
      }
    </>
  )
}
