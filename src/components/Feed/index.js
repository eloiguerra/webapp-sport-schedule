import React,{useState, useEffect} from 'react';

import api from '../../services/api';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

import DotLoader from '../Loaders/DotLoader';
import {
  Container, PublicationWrapper,
  Header, Content
} from './styles';

export default function Feed() {
  const [publications, setPublications] = useState([]);
  const [paginationIndex, setPaginationIndex] = useState(1);
  const [loading, setLoading] = useInfiniteScroll(callback);

  function callback(){
    setPaginationIndex(paginationIndex + 1);
    setLoading(false);
  }

  useEffect(() => {
    api.get(`/friendsPublications?page=${paginationIndex}&limit=${3}`)
    .then(response => {
      setPublications([...publications, ...response.data]);
    })
  }, [paginationIndex])

  return (
    <Container>
      {publications.map(item => (
        <PublicationWrapper key = {item._id}>
          <Header>
            <div className = "user-info">
              <img src = {item.user.profile_photo.url} alt = "" />
              <p>{item.user.full_name}</p>
            </div>
            <p>{item.sport.name}</p>
          </Header>
          <Content>
            {item.description && <p>{item.description}</p>}
            {item.image && <img src = {item.image.url} alt = "" />}
          </Content>
        </PublicationWrapper>
      ))}
    </Container>
  )
}
