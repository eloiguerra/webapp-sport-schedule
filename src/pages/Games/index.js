import React, {useState, useCallback, useRef, useEffect} from 'react';

import NavBarHome from '../../components/NavBars/NavBarHome';
import Modal from '../../components/Modals';
import InputBlock from '../../components/InputBlock';
import SelectSearch from '../../components/SelectSearch';
import TextArea from '../../components/Textarea';
import {Container, FormGame, MapContainer} from './styles';

import {faTrophy} from '@fortawesome/free-solid-svg-icons';

import moment from 'moment';

import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from '@react-google-maps/api';

import useMap from '../../hooks/useMap';
import useForm from '../../hooks/useForm';

import api from '../../services/api';
import CircleLoader from '../../components/Loaders/CircleLoader';
import InputButton from '../../components/Buttons/InputButton';

const libraries = ["places"];
const containerStyle = {
  width: '100%',
  height: '100%'
};

export default function Games() {
  moment.locale('pt', {
    months : ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  });

  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const map = useMap();
  const [{values}, handleChange, handleSubmit] = useForm();

  const {mapError, currentCordinates} = map;
  const center = {
    lat: currentCordinates?.lat,
    lng: currentCordinates?.lng
  };

  const [sports, setSports] = useState();
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [selectedCoordenates, setSelectedCoordenades] = useState({});
  const [modalHelpMap, setModalHelpMap] = useState(false);
  const [modalGame, setModalGame] = useState(false);
  const [loadPage, setLoadPage] = useState(false);

  useEffect(() => {
    api.get('/sports')
    .then(response => {
      setSports(response.data);
    })
    .catch(response => {
      console.log(response);
    })
  }, []);

  useEffect(() => {
    api.get('/games')
    .then(response => {
      setMarkers(response.data);
      console.log(response);
    })
    .catch(response => {
      console.log(response);
    })
  }, []);

  const onMapClick = useCallback(event => {
    setSelectedCoordenades({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    })
    /* setMarkers(prevMarkers => [
      ...prevMarkers,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
    }]); */
    setModalGame(true);
  }, []);

  const cancelGame = () => {
    // setMarkers(prevMarkers => prevMarkers.splice(-1, 1));
    setModalGame(false);
  }

  const newGame = () => {
    const {
      name, date, hour,
      sport, description
    } = values;

    // const {lat, lng} = markers[markers.length-1];
    const {lat, lng} = selectedCoordenates;

    api.post('/games', {
      name,
      description,
      date,
      hour,
      lat,
      lng,
      sport
    })
    .then(response => {
      setMarkers([...markers, response.data])
      console.log(markers);
      setModalGame(false);
    })
    .catch(err => {
      console.log(err);
    })
  }

  const mapRef = useRef();

  const onMapLoad = useCallback(map => {
      mapRef.current = map();
  }, []);

  return (
    <>
      {loadPage && <CircleLoader fullScreen = {true} />}
      <NavBarHome />
      <Container>
        <MapContainer>
          {(!center || mapError) ?
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
                  <Marker key = {marker._id}
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
                    <h2>{selected.name}</h2>
                    <p>{selected.description}</p>
                    <p>
                      Data: {moment(selected.date).format('DD [de] MMMM [de] YYYY')}
                    </p>
                    <p>
                      Horário: {selected.hour}
                    </p>
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
                name = "sport"
              />
              <div>
                <InputBlock
                  inputType = "date"
                  name = "date"
                  onChange = {handleChange}
                />
                <InputBlock
                  inputType = "text"
                  placeholder = "Horário"
                  name = "hour"
                  onChange = {handleChange}
                />
              </div>
              <TextArea
                name = "description"
                onChange = {handleChange}
                placeholder = "Descrição do evento"
              />
              <InputButton type = "submit" text = "Enviar" />
            </FormGame>
          </div>
        </Modal>
      }
    </>
  )
}
