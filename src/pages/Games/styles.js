import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 70px);
  height: 100vh;
  padding-top: 60px;

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

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const FormGame = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
