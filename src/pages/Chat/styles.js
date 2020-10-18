import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 70px);
  padding-top: 60px;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 701px){
    margin-left: 70px;
  }

  @media screen and (max-width: 700px){
    width: 100%;
  }
`;

export const ChatWrapper = styled.div`
  display: grid;
  grid-template-rows: calc(100vh - 60px);
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
  'chatbox friends'
  ;
`;

export const ChatBox = styled.div`
  grid-area: chatbox;

  display: flex;
  flex-direction: column;

  .messages{
    width: 100%;
    height: 90%;
  }

  .sender{
    width: 100%;
    height: 10%;

    background: var(--color-gray-light);

    display: flex;

    textarea{
      border: none;
      outline: none;
      width: calc(100% - 40px);

      resize: none;
    }

    button{
      border: none;
      outline: none;

      width: 40px;
      height: 100%;

      background: var(--color-primary);

      cursor: pointer;
      img{
        margin: 0 auto;
        width: 30px;
        height: 30px;
      }
    }
  }
`;

export const Friends = styled.div`
  grid-area: friends;

  display: flex;
  flex-direction: column;

  background: var(--color-gray-light);

  ul{
    width: 100%;

    li{
      display: flex;
      align-items: center;

      padding: 8px;

      img{
        width: 40px;
        height: 40px;

        border-radius: 50%;
      }

      p{
        margin-left: 4px;

        cursor: pointer;

        width: 100%;
      }
    }
  }
`;


