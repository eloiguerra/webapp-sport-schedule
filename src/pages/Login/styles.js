import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: var(--color-primary);

  display: flex;
  justify-content: center;
  align-items: center;

  form {
    position: relative;
    width: 400px;
    height: 80%;

    background: var(--color-white);

    border-radius: 8px;

    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;
