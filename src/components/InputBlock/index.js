import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {InputContainer} from './styles';

export default function InputBlock({inputType, name, id, placeholder, icon, onChange}) {
  return (
    <InputContainer>
      <label htmlFor = {id}> <FontAwesomeIcon icon = {icon}/> </label>
      <input
        type = {inputType}
        name = {name}
        id = {id}
        placeholder = {placeholder}
        onChange = {onChange}
      />
    </InputContainer>
  )
}
