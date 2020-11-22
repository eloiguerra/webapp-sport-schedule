import React, {useState} from 'react';

import api from '../../services/api';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import NavLink from '../NavLink';
import {Container,SearchBar, ContentFounded} from './styles';

export default function SearchBox() {
  const [displayContent, setDisplayContent] = useState(false);
  const [searchedUsers, setSearchedUsers] = useState([]);

  const closeContent = () => {
    setTimeout(() => {
      setDisplayContent(false);
    }, 150);
  }

  const getSearch = (e) => {
    api.get(`users/${e.target.value}`)
    .then(response => {
      setSearchedUsers(response.data);
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <Container>
      <SearchBar visible = {displayContent}>
        <input
          onChange = {(e) => getSearch(e)}
          type = "text"
          placeholder = "Buscar..."
          onFocus = {() => setDisplayContent(true)}
          onBlur = {closeContent}
        />
        <button><FontAwesomeIcon icon = {faSearch} /></button>
      </SearchBar>
      <ContentFounded visible = {displayContent}>
        {searchedUsers.length ? searchedUsers.map(item => (
          <span key = {item._id}>

            {item.profile_photo &&
              <img src = {item.profile_photo.url} alt = ""/>
            }

            <NavLink
              path = {`/users/${item._id}`}
              text = {item.full_name}
            />
          </span>
        )): null}
      </ContentFounded>
    </Container>
  )
}
