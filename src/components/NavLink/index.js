import React from 'react'
import {StyledNavLink} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavLink({text, icon, path, color = "black"}) {
  return (
    <StyledNavLink color = {color} to = {path}>
      {icon && <FontAwesomeIcon icon = {icon} />} {text}
    </StyledNavLink>
  )
}
