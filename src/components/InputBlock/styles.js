import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;

  label{
    position: absolute;
    left: 0px;

    color: var(--color-gray);

    max-width: 320px;
  }

  input {
    width: 100%;
    /* max-width: 320px; */
    padding: 16px 24px;

    border: none;
    border-bottom: 1px solid;
    border-color: var(--color-gray);
  }

  input[type=date] {
    width: 180px;
  }
`;
