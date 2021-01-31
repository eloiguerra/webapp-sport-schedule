import {useState} from 'react';

const useMap = () => {
  const [mapError, setMapError] = useState('');
  const [currentCordinates, setCurrentCordinates] = useState(
   /*  {
      lat: -23.5489,
      lng: -46.6388
    } */
  );

  const success = (position) => {
    const {coords} = position;

    setCurrentCordinates({
      lat: coords.latitude,
      lng: coords.longitude
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
