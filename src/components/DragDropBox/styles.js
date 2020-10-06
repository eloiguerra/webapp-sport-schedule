import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 2px dotted var(--color-gray);

  height: 200px;

  padding: 0 8px;

  svg{
    color: var(--color-gray);
    font-size: 4rem;
  }

  small{
    color: var(--color-gray);
    font-size: 1.3rem;
  }
`;
