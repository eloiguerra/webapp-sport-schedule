import {useState} from 'react';

const useMap = () => {
  const [mapError, setMapError] = useState('');
  const [currentCordinates, setCurrentCordinates] = useState('blz');

  const success = (position) => {
    const {coords} = position;

    setCurrentCordinates({
      lat: coords.latitude,
      long: coords.longitude
    })

    return;
  }

  const error = () => {
    setMapError('Para encontrar eventos mais próximos de você, deixe nos saber sua localização');
  }

  const options = () => {

  }

  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(success, error, options);
  }
  else{
    return false;
  }

  return {currentCordinates, mapError};
};

export default useMap;
