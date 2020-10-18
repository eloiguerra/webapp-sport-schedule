import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  outline: none;

  color: var(--color-secondary);
  background: transparent;

  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`;
