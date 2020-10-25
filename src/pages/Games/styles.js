import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 70px);
  padding-top: 70px;

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
