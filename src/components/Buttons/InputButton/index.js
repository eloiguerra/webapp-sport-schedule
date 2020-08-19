import React from 'react'
import {ContainerInputButton} from './styles';

export default function InputButton({type, text}) {
  return (
    <ContainerInputButton>
      <button type = {type}>
        {text}
      </button>
    </ContainerInputButton>
  )
}
