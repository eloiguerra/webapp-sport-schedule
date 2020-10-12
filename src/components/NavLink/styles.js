import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledNavLink = styled(Link)`
  margin-top: ${props => props.margin ? '16px' : '0'};
  font-size: ${props => props.color === "black" ? '1.5rem' : '1.8rem'};
  color: ${props => props.color === "black" ? 'var(--color-black)' : 'var(--color-white)'};
  &:hover{
    cursor: pointer;
  }
`;
