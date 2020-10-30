import React from 'react';
import {Container, Circle} from './styles';

export default function CircleLoader({fullScreen = false}) {
  return (
    <>
      {fullScreen ?
        <Container fullScreen = {fullScreen}>
          <Circle />
        </Container>
      :
        <Circle />
      }
    </>
  )
}
