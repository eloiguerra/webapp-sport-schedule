import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 700px){
    margin-bottom: 70px;
  }

  @media screen and (min-width: 701px){
    margin-bottom: 16px;
  }
`;

export const PublicationWrapper = styled.div`
  margin-top: 16px;
  padding: 8px;

  width: 95%;
  max-width: 600px;
  min-width: 300px;

  display: flex;
  flex-direction: column;

  border-radius: 8px;
  background: var(--color-white);
  -webkit-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .user-info{
    width: 100%;

    display: flex;
    align-items: center;

    img{
      width: 40px;
      height: 40px;

      border-radius: 50%;
    }

    p{
      font-weight: 700;

      margin-left: 8px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;

  p{
    font-size: 1.6rem;
    margin: 4px 0;
  }

  img{
    width: 100%;
  }
`;

export const ToolBar = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  border-top: 1px solid var(--color-gray);
  border-bottom: 1px solid var(--color-gray);

  button, label{
    border: none;
    outline: none;

    padding: 8px;

    background: transparent;

    transition: all .3s;
    cursor: pointer;

    font-size: 1.6rem;

    &:hover{
      background: var(--color-primary);
      color: var(--color-white);
    }

    svg{
      margin-right: 4px;
    }
  }

  .container-reactions{
    .toggle-reactions{
      &:hover + .reactions{
        display: flex;
        transition-delay: 2s;
      }
    }

    .reactions{
      position: absolute;
      bottom: 25px;

      display: none;
      border-radius: 50px;

      background: var(--color-white-two);
      width: 200px;
    }
  }
`;

export const HudBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  color: var(--color-gray);

  padding-bottom: 8px;

  .likes{
    svg{
      color: var(--color-gray);
      margin-right: 4px;
    }
  }
`;

export const Comments = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 8px;

  background: var(--color-white);

  max-height: 150px;
  overflow: auto;

  &::-webkit-scrollbar{
    width: 8px;
    background: var(--color-primary);
    border-radius: 0 8px 8px 0;
  }

  &::-webkit-scrollbar-thumb{
   background: var(--color-gray);
  }

  .user-comment{
    .user{
      display: flex;
      align-items: center;

      p{
        margin-left: 4px;
        font-weight: 700;
      }
    }
  }

  img{
    width: 32px;
    height: 32px;

    border-radius: 50%;
  }

  .post-comment{
    display: flex;
    align-items: center;

    border-bottom: 1px solid var(--color-gray);
    padding-bottom: 4px;
    margin-bottom: 4px;

    textarea{
      width: 90%;

      padding-left: 8px;

      border-radius: 50px 0 0 50px;
      border: none;
      resize: none;

      overflow-y: hidden;

      background: var(--color-gray-light);
    }

    button{
      border: none;
      outline: none;

      cursor: pointer;

      img{
        width: 20px;
        height: 40px;
      }
    }
  }
`;

export const NoMoreContent = styled.div`
  width: 95%;
  max-width: 600px;
  min-width: 300px;

  background: url();
`;
