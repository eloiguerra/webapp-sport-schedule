import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledNavLink = styled(Link)`
  margin-top: 16px;
  font-size: 1.5rem;
  color: var(--color-black);

  &:hover{
    text-decoration: underline;
    cursor: pointer;
  }
`;
