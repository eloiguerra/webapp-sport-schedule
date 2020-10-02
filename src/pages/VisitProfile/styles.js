import styled from 'styled-components';

export const Container = styled.section`
  width: calc(100% - 70px);
  margin-top: 70px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 701px){
    margin-left: 70px;
  }

  @media screen and (max-width: 700px){
    width: 100%;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: rgb(243,243,245);
  background: linear-gradient(0deg, rgba(243,243,245,1) 2%, rgba(246,246,246,1) 57%, rgba(255,255,255,1) 99%);

  border-bottom: 2px solid var(--color-white-two);

  margin-bottom: 16px;
  .profile-photo{
      width: 100px;
      height: 100px;
      border-radius: 50%;
  }

  hr{
    margin-top: 8px;
    margin-bottom: 8px;
    color: var(--color-gray);
    width: 90%;
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 150px;

  border: none;
  border-radius: 8px;
  outline: none;

  padding: 16px;

  color: var(--color-white);
  background: var(--color-primary);

  cursor: pointer;

  transition: all .3s;

  svg{
    margin-right: 8px;
  }

  &:hover{
    transform: scale(0.95);
  }
`;
