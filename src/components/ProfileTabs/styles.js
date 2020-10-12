import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8px;

  width: 100%;

  border-top: 1px solid var(--color-gray);

  display: flex;
  justify-content: center;
`;

export const OptionsList = styled.ul`
  display: flex;
`;

export const Option = styled.li`
  position: relative;
  padding: 16px;

  color: var(--color-gray);
  font-size: 1.6rem;

  cursor: pointer;

  &:hover{
    background: var(--color-gray-light);
  }

  &.active::after{
    content: "";

    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 2px;

    background: var(--color-secondary);
  }
`;
