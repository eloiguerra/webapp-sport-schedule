import styled from 'styled-components';
import homeReferee from '../../assets/images/homeReferee.jpg';

export const Introduction = styled.div`
  height: 100vh;
  position: relative;

  div{
    position: absolute;
    bottom: 0;
    border-radius: 8px;
    padding: 16px;
    background: rgba(188, 96, 44, 0.9);
    width: 100%;
  }

  background: url(${homeReferee});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;

  color: var(--color-white);
  text-align: center;
`;

export const ViewAroundMap = styled.div`
  height: 100vh;

  background: var(--color-white);
`;
