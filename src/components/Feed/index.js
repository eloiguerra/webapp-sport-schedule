import React,{useState, useEffect} from 'react';

import api from '../../services/api';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import useForm from '../../hooks/useForm';

import Toast from '../../components/Toast';
import DotLoader from '../Loaders/DotLoader';
import CircleLoader from '../Loaders/CircleLoader';
import {
  Container, PublicationWrapper,
  Header, Content,
  ToolBar, Comments, HudBar
} from './styles';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faCommentAlt
} from '@fortawesome/free-solid-svg-icons';

import sendButton from '../../assets/images/send-button.svg';

export default function Feed({user, by}) {
  const [publications, setPublications] = useState([]);
  const [toast, setToast] = useState({});
  const [paginationIndex, setPaginationIndex] = useState(1);
  const [loadPage, setLoadPage] = useState(false);

  const [loadingScroll, setLoadingScroll] = useInfiniteScroll(scrollCallback);
  const [{values}, handleChange] = useForm();

  function scrollCallback(){
    setPaginationIndex(paginationIndex + 1);
    setLoadingScroll(false);
  }

  const handleLikeSubmit = publication => {
    api.post('/publications/likes', {
      publication
    })
    .then(response => {
      const newLike = publications.map(item => {
        if(item._id === publication){
          return response.data;
        }
        else{
          return item;
        }
      });

      setPublications(newLike);
    })
    .catch(err => {
      console.log(err);
    })
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
        setToast({
          type: 'success',
          title: 'Comentado!',
          message: 'Comentário feito com sucesso',
          visible: true
        });
      })
      .catch(err => {
        setToast({
          type: 'error',
          title: 'Error',
          message: err,
          visible: true
        });
      })
    }
  }

  useEffect(() => {
    if(paginationIndex === 1)
      setLoadPage(true);

    api.get(`/friendsPublications?page=${paginationIndex}&limit=${3}`)
    .then(response => {
      console.log(response);
      setPublications([...publications, ...response.data]);
      setLoadPage(false);
    })
  }, [paginationIndex])

  return (
    <Container>
      {/* {loadPage && <CircleLoader />} */}
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
          {item.likes.length || item.comments.length ?
            <HudBar>
              <small className = "likes">
                <FontAwesomeIcon icon = {faThumbsUp} />
                {item.likes.length}
              </small>
              <small className = "comments">
              {item.comments.length > 1
                ? `${item.comments.length} comentários`
                : `${item.comments.length} comentário`
              }
              </small>
            </HudBar>
            : null
          }

          <ToolBar>
            <div className = "container-reactions">
              <button
                className = "toggle-reactions"
                onClick = {() => handleLikeSubmit(item._id)}
                // id = {() => item.likes.filter(like => )}
              >
                <FontAwesomeIcon icon = {faThumbsUp} />
                Curtir
              </button>
            </div>
            <label htmlFor = {`textarea-${item._id}`}>
              <FontAwesomeIcon icon = {faCommentAlt}/>
              Comentar
            </label>
          </ToolBar>
          <Comments>
            <form
                className = "post-comment"
                onSubmit = {(e) => handleCommentSubmit(e)}
                id = {item._id}
            >
              <img src = {user.profile_photo.url} alt = "" />
              <textarea
                id = {`textarea-${item._id}`}
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
      {loadingScroll && <DotLoader />}
      {toast.visible &&
        <Toast
          type = {toast.type}
          title = {toast.title}
          message = {toast.message}
        />
      }
    </Container>
  )
}
