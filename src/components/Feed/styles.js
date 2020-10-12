import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;

  img{
    width: 40px;
    height: 40px;
  }

  p{
    font-size: 1.5rem;
    font-weight: 700;

    margin-left: 8px;
  }
`;
