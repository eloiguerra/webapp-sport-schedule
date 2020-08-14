import React from 'react'
import { NavBar, Introduction, ViewAroundMap } from './styles';
import {Link} from 'react-router-dom';

export default function Index() {
  return (
    <>
      <NavBar>
        <ul>
          <li> <Link to = '/login'> Fazer login </Link> </li>
          <li> <Link to = '/register'><button> Criar conta </button></Link></li>
        </ul>
      </NavBar>
      <Introduction>

      </Introduction>
      <ViewAroundMap>

      </ViewAroundMap>
    </>
  )
}
