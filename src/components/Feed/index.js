import React,{useState, useEffect} from 'react';

import api from '../../services/api';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import useForm from '../../hooks/useForm';

import DotLoader from '../Loaders/DotLoader';
import {
  Container, PublicationWrapper,
  Header, Content,
  ToolBar, Comments
} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faCommentAlt
} from '@fortawesome/free-solid-svg-icons';
import sendButton from '../../assets/images/send-button.svg';

export default function Feed({user}) {
  const [publications, setPublications] = useState([]);
  const [paginationIndex, setPaginationIndex] = useState(1);
  const [loading, setLoading] = useInfiniteScroll(callback);
  const [{values}, handleChange, handleSubmit] = useForm();

  function callback(){
    setPaginationIndex(paginationIndex + 1);
    setLoading(false);
  }

  const handleCommentSubmit = e => {
    e.preventDefault();

    const {comment} = values;
    const publication = e.target.id;

    if(comment){
      api.post('/publications/comments', {
        comment,
        publication
      })
      .then(response => {
        const newComment = publications.map(item => {
          if(item._id === publication){
            return response.data;
          }
          else{
            return item;
          }
        });

        setPublications(newComment);
      })
      .catch(err => {
        console.log(err);
      })
    }
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
          <ToolBar>
            <div className = "container-reactions">
              <button className = "toggle-reactions">
                <FontAwesomeIcon icon = {faThumbsUp} />
                Curtir
              </button>
              <div className = "reactions"> </div>
            </div>
            <button>
              <FontAwesomeIcon icon = {faCommentAlt}/>
              Comentar
            </button>
          </ToolBar>
          <Comments>
            <form
                className = "post-comment"
                onSubmit = {(e) => handleCommentSubmit(e)}
                id = {item._id}
            >
              <img src = {user.profile_photo.url} alt = "" />
              <textarea
                name = "comment"
                placeholder = "Comentar..."
                onChange = {handleChange}
              />
              <button type = "submit">
                <img src = {sendButton} alt = ""/>
              </button>
            </form>
            {item.comments.map(comment => (
              <div key = {comment._id} className = "user-comment">
                <div className = "user">
                 <img src = {comment.owner.profile_photo.url} alt = ""/>
                 <p>{comment.owner.full_name}</p>
                </div>
                <p className = "comment">
                  {comment.description}
                </p>
              </div>
            ))}
          </Comments>
        </PublicationWrapper>
      ))}
    </Container>
  )
}
