import styled, {keyframes} from 'styled-components';

const modalAnimation = keyframes`
  from {
      opacity: 0;
      transform: translate3d(0, -60px, 0);
  }
  to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
  }
}
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  position: relative;

  padding-bottom: 16px;

  background: var(--color-white);
  width: 90%;
  max-width: 600px;

  border-radius: 4px;

  animation: ${modalAnimation} .3s;

  .head{
    padding: 16px;
  }

  .body{
    margin-top: 16px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;

  width: 40px;
  height: 40px;

  font-size: 1.1em;
  background-color: var(--color-white);
  border: none;

  outline: none;
  cursor: pointer;
`;

export default Container;
