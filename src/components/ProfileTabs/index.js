import React from 'react';
import {useHistory} from 'react-router-dom';

import {Container, Option, OptionsList} from './styles';

export default function ProfileTabs({userId}) {
  const history = useHistory();

  return (
    <Container>
      <OptionsList>
        <Option
          onClick = {() => history.push(`/users`)}
          className = "active"
        > Linha do tempo </Option>
        <Option
          onClick = {() => history.push(`/users/friends/${userId}`)}
        > Amigos </Option>
      </OptionsList>
    </Container>
  )
}
