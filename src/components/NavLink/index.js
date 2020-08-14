import React from 'react'
import {StyledNavLink} from './styles';

export default function NavLink({text, path}) {
  return (
    <StyledNavLink to = {path}>
      {text}
    </StyledNavLink>
  )
}
