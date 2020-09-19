import styled from 'styled-components';

const Container = styled.div`
  position: relative;

  width: 100%;

  max-width: 320px;

  label{
    position: absolute;
    top: -10px;
    left: 5px;

    background: var(--color-white);
  }

  textarea{
    padding: 16px;
    overflow: auto;
    width: 100%;
    height: 150px;
    resize: none;
  }

  p{
    text-align: end;
    color: var(--color-gray);
    font-size: 1.3rem;
  }
`;

export default Container;

