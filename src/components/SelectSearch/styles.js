import styled from 'styled-components';

import arrowDown from '../../assets/images/arrow-down.svg';

export const SelectBox = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 240px;
`;

export const OptionsContainer = styled.div`
  display: ${props => props.options ? 'flex' : 'none'};
  flex-direction: column;

  background: var(--color-gray-light);

  max-height: 240px;

  border-radius: 8px;

  overflow: auto;

  &::-webkit-scrollbar{
    background: var(--color-gray);

    width: 8px;
    border-radius: 0 8px 8px 0;
  }

  &::-webkit-scrollbar-thumb{
    background: var(--color-white-two);

    width: 8px;
  }
`;

export const Option = styled.div`
  color: var(--color-black);

  padding: 12px 24px;

  cursor: pointer;

  label{
    cursor: pointer;

    font-weight: 700;
  }

  input{
    display: none;
  }

  &:hover{
    background: var(--color-gray);
  }
`;

export const SearchBox = styled.div`
  position: sticky;

  width: 100%;
  padding: 12px 16px;

  background: var(--color-gray-light);

  input{
    width: 100%;
    padding: 8px;
  }
`;

export const SelectedContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  margin-bottom: 8px;
  padding: 12px 24px;

  background: var(--color-gray-light);

  border-radius: 8px;

  font-weight: 700;

  cursor: pointer;

  &::after{
    content: "";
    background: url(${arrowDown});
    background-size: contain;
    background-repeat: no-repeat;

    position: absolute;
    height: 100%;
    width: 32px;

    right: 5px;
    top: 6px;

    transition: all 0.4s;
  }
`
