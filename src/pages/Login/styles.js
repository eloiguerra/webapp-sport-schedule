import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .form-container{
    background: var(--color-secondary);

    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;

    form {
      width: 100%;
      min-width: 300px;
      max-width: 550px;
      height: 100%;
      max-height: 600px;

      margin: 0 auto;

      background: var(--color-white);

      box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      padding-bottom: 8px;

      .form-head{
        display: flex;
        align-items: center;

        width: 100%;

        font: 700 2rem Lora;
        color: var(--color-white);

        background: var(--color-primary);
        img{
          width: 100px;
        }
      }
    }
  }
`;
