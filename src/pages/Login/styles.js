import styled from 'styled-components';
import loginReferee from '../../assets/images/loginReferee.jpg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 1024px){
    .image-container{
      height: 100vh;
      width: 100%;

      background: url(${loginReferee});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      img{
        width: 100%;
        height: 100%;
      }

      &::before{
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        /* background-color: rgba(0,0,0,.5); */
      }
    }
  }

  .form-container{
    background: var(--color-secondary);

    height: 100%;
    width: 100%;

    @media screen and (min-width: 1024px){
      max-width: 450px;
      padding: 16px;
    }

    display: flex;
    align-items: center;
    z-index: 10;

    form {
      width: 100%;
      min-width: 300px;
      max-width: 450px;
      height: 80%;

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
