import styled from 'styled-components';

const Container = styled.div`
  width: calc(100% - 70px);
  margin-top: 70px;

  @media screen and (min-width: 701px){
    margin-left: 70px;
  }

  @media screen and (max-width: 700px){
    width: 100%;
  }
`;

export default Container;
