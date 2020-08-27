import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-around;
  align-items: center;

  .image-container{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form-container{
    background: var(--color-secondary);
    height: 100%;
    padding: 0 16px;
    display: flex;
    align-items: center;

    form {
      position: relative;
      width: 400px;
      height: 80%;

      background: var(--color-white);

      border-radius: 8px;

      box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);

      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  }
`;
