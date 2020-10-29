import React, {useState} from 'react';
import Container from './styles';

export default function Textarea(props) {
  const [char, setChar] = useState(props.maxLength);

  const remainChar = (remainChar) => setChar(props.maxLength - remainChar);
  const changeActions = (e) => {
    props.maxLength && remainChar(e.target.value.length);
    props.onChange(e);
  }

  return (
    <Container>
      <label htmlFor = {props.id}> {props.label} </label>
      <textarea
        id = {props.id}
        name = {props.name}
        maxLength = {props.maxLength ? props.maxLength : ""}
        placeholder = {props.placeholder ? props.placeholder : ""}
        onChange = {(e) => changeActions(e)}
      >
      </textarea>
      {props.maxLength && <p>caracteres restantes: {char}</p>}
    </Container>
  )
}
