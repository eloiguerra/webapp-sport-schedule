import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 90%;

  label{
    position: absolute;
    left: 0;

    color: var(--color-gray);

    max-width: 320px;
  }

  input {
    width: 100%;
    padding: 16px 24px;

    border: none;
    border-bottom: 1px solid;
    border-color: var(--color-gray);
  }

  input[type=date] {
    width: 180px;
  }
`;

export const Error = styled.small`
  color: var(--color-error);
`;
