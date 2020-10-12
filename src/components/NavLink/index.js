import React from 'react'
import {StyledNavLink} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavLink({text, icon, path, color = "black", margin = 0}) {
  return (
    <StyledNavLink margin = {margin} color = {color} to = {path}>
      {icon && <FontAwesomeIcon icon = {icon} />} {text}
    </StyledNavLink>
  )
}
