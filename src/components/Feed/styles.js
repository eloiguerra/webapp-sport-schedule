import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PublicationWrapper = styled.div`
  margin-top: 16px;
  padding: 8px;

  width: 95%;
  max-width: 600px;
  min-width: 300px;

  display: flex;
  flex-direction: column;

  border-radius: 8px;
  background: var(--color-white);
  -webkit-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .user-info{
    display: flex;
    align-items: center;

    img{
    width: 40px;
    height: 40px;

    border-radius: 50%;
    }

    p{
      font-weight: 700;

      margin-left: 8px;
    }
  }
`;

export const Content = styled.div`
  p{
    font-size: 1.6rem;
    margin: 4px 0;
  }

  img{
    width: 100%;
    object-fit: cover;
  }
`;
