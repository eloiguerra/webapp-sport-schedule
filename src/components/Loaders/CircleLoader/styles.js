import styled, {keyframes} from 'styled-components';

const spin = keyframes`
  100%{
    transform:rotate(360deg);
    filter:hue-rotate(360deg);
  }
`;

export const Container = styled.div`
  height: ${props => props.fullScreen ? '100vh' : '100%'};
  width: ${props => props.fullScreen ? '100vw' : '100%'};

  background: ${props => props.fullScreen && 'rgba(0, 0, 0, 0.5)'};
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;

  border: 5px solid var(--color-gray);
  border-radius: 50%;

  animation: ${spin} 1s linear infinite;
`;
