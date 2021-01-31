import styled from 'styled-components';

import arrowDown from '../../assets/images/arrow-down.svg';

export const SelectBox = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 240px;
`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 54px;

  z-index: 1;

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

  width: 232px;
  line-height: 44px;

  cursor: pointer;

  label{
    display: inline-block;

    cursor: pointer;
    width: 100%;

    font-weight: 700;
  }

  input{
    display: none;
    width: 100%;
  }

  &:hover{
    background: var(--color-gray);
  }
`;

export const SearchBox = styled.div`
  position: sticky;
  top: 0;

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
