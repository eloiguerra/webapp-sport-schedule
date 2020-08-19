import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font: 700 2rem Lora;

  width: 100%;

  background: var(--color-tertiary);

  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);

  .logo{
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .tools{
    display: flex;
    justify-content: end;
    align-items: center;
  }
`;

export default Container;
