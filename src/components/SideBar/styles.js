import styled from 'styled-components';

const Container = styled.div`
  position: fixed;

  margin-top: 20px;

  height: 100%;

  background: var(--color-secondary);

  ul{
    width: 100%;
    height: 100%;

    li{
      padding: 16px;
    }

    .logout{
      margin-top: auto;
    }
  }
`;

export default Container;
