import React, {useEffect} from 'react';
import Container, {CloseButton, Content} from './styles';

export default function Modal({children, id = "modal", onClose = () => {}}) {
  const avoidModal = e => e.target.id === id && onClose();

  useEffect(() => {
    const isEscPressed = e => e.key === "Escape" && onClose();

    window.addEventListener('keydown', isEscPressed);
    return () => window.removeEventListener('keydown', isEscPressed);
  }, [onClose]);

  return (
    <Container
      id = {id}
      onClick = {e => avoidModal(e)}
    >
      <Content>
        <CloseButton onClick = {onClose}> x </CloseButton>
        {children}
      </Content>
    </Container>
  )
}
