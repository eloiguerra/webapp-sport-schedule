import React from 'react'
import {Button} from './styles';

export default function LinkButton({children, onClick}) {
  return (
    <Button onClick = {onClick}> {children} </Button>
  )
}
