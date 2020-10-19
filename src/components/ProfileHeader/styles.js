import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .photo-container{
    position: relative;
    /* z-index problema amigo */
    .profile-photo{
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    button{
      display: flex;
      align-items: center;

      position: absolute;
      right: 0;
      bottom: 8px;

      padding: 4px;

      border-radius: 50%;
      border: none;

      background: var(--color-gray-light);

      cursor: pointer;

      svg{
        width: 20px;
        height: 20px;
      }

      &:hover{
        background: var(--color-gray-light);
      }
    }
  }

  .description{
    svg{
      margin-left: 8px;
      cursor: pointer;
    }
  }
`;

export const FormDescription = styled.form`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  button{
    margin-top: 8px;

    width: 90%;
    max-width: 320px;

    padding: 8px;

    background: var(--color-white);

    border: 1px solid;
    border-color: var(--color-primary);
    color: var(--color-primary);

    transition: all .3s;

    cursor: pointer;

    &:hover{
      background: var(--color-primary);

      border-radius: 50px;
      border: 1px solid;
      border-color: var(--color-white);
      color: var(--color-white);
    }
  }
`;

export const FormPhoto = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .image-container{
    img{
      width: 100%;

      @media screen and (min-width: 701px){
        width: 250px;
        height: 250px;
        /* padding-right: 8px; */
        /* border-right: 2px solid var(--color-black); */
        margin-right: 8px;
      }
    }

    /* @media screen and (max-width: 700px){
      max-width: 20px;
    } */


  }

  .input-container{
    display: flex;
    flex-direction: column;
    justify-content: center;

    label{
      overflow: hidden;

      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--color-white);

      background: var(--color-tertiary);

      padding: 4px;

      border-radius: 4px;

      cursor: pointer;

      transition: background .2s;

      &:hover{
        background: var(--color-secondary);
      }

      svg{
        margin-right: 4px;
      }
    }

    input{
      display: none;
    }
  }

  @media screen and (min-width: 701px){
    justify-content: space-around;
  }
`;
