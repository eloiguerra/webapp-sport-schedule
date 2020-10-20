import styled from 'styled-components';

export const ContainerInputButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;

  button {
    width: 80%;
    padding: 16px 0;

    background: var(--color-primary);

    border-radius: 0;
    border: 1px solid;
    border-color: var(--color-primary);
    background: var(--color-white);
    color: var(--color-primary);

    transition: .4s all;

    &:hover, &:focus{
      cursor: pointer;
      border-radius: 50px;
      border: none;
      background: var(--color-primary);
      color: var(--color-white);
    }
  }
`;
