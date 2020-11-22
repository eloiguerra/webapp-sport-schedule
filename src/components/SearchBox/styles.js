import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  line-height: 35px;

  display: flex;
  flex-direction: column;
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width:701px){
    border: ${props => props.visible && '1px solid var(--color-primary)'};
    border-radius: ${props => props.visible && '50px'};
    padding: ${props => props.visible && '1px'};

    &:hover {
      border: 1px solid var(--color-primary);
      border-radius: 50px;
      padding: 1px;
    }

    &:hover > input {
      width: 200px;
    }

    &:hover > button{
      border: none;
    }
  }

  @media screen and (max-width: 700px){
    justify-content: space-between;

    border:1px solid var(--color-primary);
    border-radius: 50px;

    padding: 1px;
    height: 100%;
    width: 90%;
  }

  input{
    border: none;
    background: transparent;

    padding-left: 8px;

    width: 200px;
    transition: all .3s;

    @media screen and (min-width: 700px){
      width: ${props => props.visible ? '200px' : '0' };
    }
  }

  button{
    display: block;
    margin: 0 10px;

    width: 35px;
    height: 35px;
    line-height: 35px;

    border: ${props => props.visible ? 'none' : '1px solid var(--color-secondary)'};
    background: var(--color-white);
    border-radius: 50%;

    color: var(--color-secondary);
    cursor: pointer;

    @media screen and (max-width: 700px){
      display: none;
    }
  }
`;

export const ContentFounded = styled.div`
  background: var(--color-gray-light);

  width: 260px;
  position: absolute;
  top: 60px;

  display: ${props => props.visible ? 'flex' : 'none' };

  flex-direction: column;

  span{
    display: flex;
    align-items: center;

    font-weight: 700;

    padding: 8px 0;
    border-bottom: 1px solid var(--color-gray);

    img{
      width: 40px;
      height: 40px;

      margin: 0 8px;

      border-radius: 50%;
    }
  }

  @media screen and (max-width: 700px){
    width: 100%;
    left: 0;
    top: 37px;
  }
`;
