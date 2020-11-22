import styled from 'styled-components';

const Container = styled.div`
  z-index: 1;

  .top-navbar{
    width: 100vw;
    height: 60px;

    position: fixed;
    top: 0;

    display: flex;

    .top-menu{
      width: 100%;
      height: 100%;

      background: var(--color-white);
      border-top-right-radius: 20px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 0 20px;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);

      .logo-container{
        display: flex;
        align-items: center;

        letter-spacing: 1px;
        font: 700 2.5rem Lora;

        cursor: pointer;

        .logo{
          height: 65px;
        }
      }

      ul{
        display: flex;

        li:not(.search-box){
          position: relative;
          display: block;
          margin: 0 10px;
          width: 35px;
          height: 35px;
          line-height: 35px;
          border: 1px solid;
          border-color: var(--color-secondary);
          border-radius: 50%;
          text-align: center;
          color: var(--color-secondary);
          cursor: pointer;
          transition: .4s all;

          ul{
            position: absolute;
            top: 45px;
            right: 0;
            width: 200px;
            background: var(--color-secondary);
            display: ${props => props.visibleDropdownConfig ? 'flex' : 'none'};
            flex-direction: column;

            li{
              width: 100%;
              color: var(--color-white);
              border: unset;
              margin: 0;
              border-radius: 0;
            }
          }

          &:hover:not(.search-bar, .searched){
            color: var(--color-white);
            background: var(--color-secondary);
            border: 1px solid white;
          }
        }

        @media screen and (max-width: 701px){
          display: none;
        }
      }
    }
  }

  .sidebar{
    position: fixed;
    background: var(--color-secondary);

    z-index: 1;

    ul{
      @media screen and (max-width: 700px){
        display: flex;
        justify-content: space-evenly;
      }

      li{
        display: block;
        padding: 20px;
        color: var(--color-white);
        position: relative;
        margin-bottom: 1px;
        white-space: nowrap;

        cursor: pointer;
        &:hover{
          background: var(--color-tertiary);
        }

        &::before{
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          background: var(--color-tertiary);

          @media screen and (min-width: 701px){
            width: 3px;
            height: 100%;
          }
        }

        .icon{
          margin-right: ${props => props.visible ? '0px' : '10px'};
          display: ${props => props.visible ? 'flex' : 'inline-block'};
          justify-content: ${props => props.visible && 'center'};

          @media screen and (max-width: 425px){
            margin-right: 0;
          }
        }

        .title{
          display: ${props => props.visible ? 'none' : 'inline-block'};

          @media screen and (max-width: 425px){
            display: none;
          }
        }


        @media screen and (max-width: 700px){
          display: flex;
        }
      }

      .mobile-search{
        display: none;

        button{
          outline: none;
          border: none;
          background: transparent;
          color: var(--color-white);
        }

        @media screen and (max-width: 701px){
          display: block;
        }
      }
    }

    @media screen and (min-width: 701px){
      top: 60px;
      left: 0;
      height: calc(100%);
      width: ${props => props.visible ? '70px' : '200px'};
      transition: all .3s ease;
    }

    @media screen and (max-width: 700px){
      bottom: 0;
      width: 100vw;
    }
  }
`;

export const Hamburguer = styled.div`
    width: 70px;
    height: 100%;
    background: var(--color-secondary);
    padding: 15px 17px;
    cursor: pointer;

    div{
      width: 35px;
      height: 4px;
      background: var(--color-white);
      margin: 5px 0;
      border-radius: 5px;
    }

    @media screen and (max-width: 700px){
      display: none;
    }
`;

export const MobileSearch = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background: var(--color-white-two);
  z-index: 1000;

  .search-bar{
    width: 100%;

    display: flex;
    justify-content: space-between;
    background: var(--color-gray-light);

    button{
      border: none;
      outline: none;

      color: var(--color-primary);
      font-size: 3rem;
    }
  }
`;

export default Container;
