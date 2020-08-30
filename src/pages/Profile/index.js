import React, {useEffect} from 'react'
import Container from './styles';
import NavBarHome from '../../components/NavBars/NavBarHome';

export default function Profile() {
  useEffect(() => {

  }, [])

  return (
    <Container>
      <NavBarHome onClick = {() => console.log('entrei')}/>
      <div className = "content">
        <header>
          <div className = "info">
            <img src = "" alt = "" />
            <h2>Nome</h2>
            <p>Descrição</p>
          </div>
        </header>
      </div>
    </Container>
  )
}
