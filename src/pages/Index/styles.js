import styled from 'styled-components';

export const NavBar = styled.div`
  position: fixed;
  height: 70px;
  width: 100vw;

  z-index: 1000;

  background: var(--color-primary);

  padding: 0 10px;

  font: 700 2.05rem Lora;

  display: flex;
  justify-content: center;
  align-items: center;

  div{
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--color-white);
    font-style: italic;

    img{
      max-width: 70px;
    }
  }

  ul {
    width: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  li {
    margin-right: 16px;
    cursor: pointer;

    a{
      color: var(--color-white);
    }

    &:hover{
      text-decoration: underline;
    }

    button {
      font: 700 1.6rem Lora;
      padding: 8px;

      background: var(--color-white);
      color: var(--color-primary);

      border: none;
      border-radius: 50px;
      border: 1px solid;
      border-color: var(--color-white);

      cursor: pointer;
    }
  }
`;

export const Introduction = styled.div`
  height: 100vh;

  background: var(--color-primary);
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: var(--color-white);
  text-align: center;

`;

export const ViewAroundMap = styled.div`
  height: 100vh;

  background: var(--color-white);
`;
