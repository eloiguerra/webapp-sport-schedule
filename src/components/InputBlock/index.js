import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {InputContainer, Error} from './styles';

export default function InputBlock({inputType, name, id, placeholder, icon, onChange, error}) {
  return (
    <>
    <InputContainer>
      <label htmlFor = {id}>
        {icon && <FontAwesomeIcon icon = {icon}/>}
      </label>
      <input
        type = {inputType}
        name = {name}
        id = {id}
        placeholder = {placeholder}
        onChange = {onChange}
      />
    </InputContainer>
    <Error>{error}</Error>
    </>
  )
}
