import styled, {keyframes} from 'styled-components';

const flow = keyframes`
  from{
    opacity: 1;
    transform: scale(1.2);
  }
  to{
    opacity: .20;
    transform: scale(.75);
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  .dot{
    width: 10px;
    height: 10px;

    border-radius: 50%;
    background: var(--color-gray);
  }

  .dot-1{
    animation-name: ${flow};
    animation-duration: .4s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  .dot-2{
    margin-left: 8px;
    animation: flow .4s ease .2s infinite alternate;
  }

  .dot-3{
    margin-left: 8px;
    animation: flow .4s ease .4s infinite alternate;
  }
`;
