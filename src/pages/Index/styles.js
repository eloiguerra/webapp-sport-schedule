import styled from 'styled-components';

export const NavBar = styled.div`
  position: fixed;
  height: 60px;
  width: 100vw;

  background: var(--color-primary);

  padding: 0 10px;

  font: 700 2.05rem Lora;

  display: flex;
  justify-content: center;
  align-items: center;
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
`;

export const ViewAroundMap = styled.div`
  height: 100vh;

  background: var(--color-white);
`;
