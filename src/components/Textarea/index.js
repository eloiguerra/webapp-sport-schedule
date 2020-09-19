import React, {useState} from 'react';
import Container from './styles';

export default function Textarea({id = "textarea", label, name, onChange}) {
  const [char, setChar] = useState(100);

  const remainChar = (remainChar) => setChar(100 - remainChar);
  const changeActions = (e) => {
    remainChar(e.target.value.length);
    onChange(e);
  }

  return (
    <Container>
      <label htmlFor = {id}> {label} </label>
      <textarea
        id = {id}
        name = {name}
        maxLength = "100"
        onChange = {(e) => changeActions(e)}
      >
      </textarea>
      <p>caracteres restantes: {char}</p>
    </Container>
  )
}
