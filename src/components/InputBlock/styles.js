import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;

  @media (max-width: 360px){
    width: 95%;
  }


  label{
      position: absolute;
      left: 45px;
      color: var(--color-gray);

      @media(min-width: 320px){
        left: 20px;
      }

      @media(min-width: 360px){
        left: 40px;
      }
    }

  input {
    width: 100%;
    max-width: 320px;
    padding: 16px 30px;

    border: none;
    border-bottom: 1px solid;
    border-color: var(--color-gray);
  }

  input[type=date] {
    width: 180px;
  }
`;
