import styled from 'styled-components';

export const ToggleNavBar = styled.div`
  display: none;
  position: absolute;
  top: .75rem;
  right: 1rem;

  flex-direction: column;
  justify-content: space-between;

  padding: 16px;
  font-size: 3rem;

  background: var(--color-secondary);
  color: var(--color-white);

  cursor: pointer;

  &:hover{
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  }

  @media screen and (max-width: 700px){
    display: flex;
  }
`;

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: var(--color-secondary);

  z-index: 10;

  font: 700 2rem Lora;

  .logo{
    display: flex;
    align-items: center;

    color: var(--color-white);

    img{
      width: 80px;
    }
  }
  @media screen and (max-width: 700px){
    flex-direction: column;
    align-items: flex-start;
  }
  .navbar-links {
    @media screen and (max-width: 700px){
      display: ${props => props.visible ? 'flex' : 'none'};
    }
  }
  .navbar-links ul{
    display: flex;
    align-items: center;

    @media screen and (max-width: 700px){
      width: 100vw;
      flex-direction: column;
    }
  }
  .navbar-links li{
    color: var(--color-white);
    padding: 16px;

    display: block;

    a{
      color: var(--color-white);
    }

    cursor: pointer;

    transition: .4s all;

    &:hover{
      background: var(--color-gray);
    }

    @media screen and (max-width: 700px){
      width: 100%;
      text-align: center;
    }
  }
`;

export default Container;
