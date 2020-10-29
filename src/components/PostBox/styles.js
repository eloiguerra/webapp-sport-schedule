import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  max-width: 600px;
  min-width: 300px;

  padding: 8px;

  border-radius: 8px;
  background: var(--color-white);
  -webkit-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);

  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  input{
    border: none;
    outline: none;

    padding: 8px;

    border-radius: 500px;
    background: var(--color-gray-light);

    width: 80%;
    cursor: pointer;

    text-align: center;
  }

  img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    .user-info{
      display: flex;
      align-items: center;

      margin-left: 8px;

      font-weight: 700;

      img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 8px;
      }

      @media screen and (max-width: 400px){
        justify-content: center;
        margin: 0 0 8px 8px;
      }
    }

    .select-search{
      margin-right: 8px;
    }

    @media screen and (max-width: 400px){
      flex-direction: column;
      justify-content: center;
    }
  }

  .preview{
    width: 250px;
    height: 250px;
  }

  .add-options{
    width: 90%;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid var(--color-gray);
    border-radius: 8px;

    padding: 8px 0;

    margin-top: 8px;
    margin-bottom: 16px;

    label{
      position: relative;
      display: flex;
      justify-content: center;

      cursor: pointer;

      transition: all .2s;

      &:hover{
        background: var(--color-gray);

        border-radius: 50%;
      }

      padding: 4px 6px;

      svg{
        width: 20px;
        height: 20px;
      }

      &::after{
        content: "Adicionar imagem";

        position: absolute;
        bottom: 40px;
        left: -50px;

        display: none;

        font-size: 1.4rem;
        color: var(--color-white);

        width: 120px;

        background: var(--color-black);

        border-radius: 500px;

        padding: 4px;

        -webkit-box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.75);
      }

      &:hover::after{
        display: flex;
        justify-content: center;
      }
    }

    input{
      display: none;
    }
  }
`;
