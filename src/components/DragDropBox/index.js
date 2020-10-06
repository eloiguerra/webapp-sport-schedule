import React, {useState, useEffect} from 'react'
import {Container} from './styles';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faUpload
} from '@fortawesome/free-solid-svg-icons';

export default function DragDropBox({file}) {
  console.log(file);
  const [files, setFiles] = useState([]);

  const drop = e => {
    e.preventDefault();
    e.stopPropagation();

    const {name, size} = e.dataTransfer.files[0];
    setFiles({name, size});
  }

  const dragOver = e => {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <Container
      onDrop = {drop}
      onDragOver = {dragOver}
    >
      <FontAwesomeIcon icon = {faUpload} />
      <small>Você também pode arrastar e soltar a foto aqui !</small>
    </Container>
  )
}
