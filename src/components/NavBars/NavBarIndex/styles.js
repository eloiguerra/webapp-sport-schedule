import styled from 'styled-components';

export const ToggleNavBar = styled.div`
  display: none;
  position: absolute;
  top: .75rem;
  right: 1.5rem;

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

    @media screen and (min-width: 701px){
      margin-right: 16px;
    }

    @media screen and (max-width: 700px){
      width: 100%;
      flex-direction: column;
    }
  }

  .navbar-links li{
    color: var(--color-white);

    display: block;

    a{
      position: relative;
      color: var(--color-white);

      @media screen and (min-width: 701px){
        &::after{
          content: "";

          position: absolute;
          left: 0;
          top: 45px;

          width: 0%;
          height: 3px;
          background: var(--color-tertiary);
          transition: all .4s;
        }

        &:hover::after{
          width: 100%;
        }
      }
    }

    @media screen and (min-width: 701px){
      padding: 0 16px;
    }

    @media screen and (max-width: 700px){
      width: 100vw;
      text-align: center;
      padding: 16px 0;
    }
  }
`;

export default Container;
