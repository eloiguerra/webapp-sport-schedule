import styled from 'styled-components';

const Container = styled.div`
  z-index: 99999;

  .top-navbar{
    width: 100vw;
    height: 60px;
    display: flex;
    position: fixed;
    top: 0;

    .top-menu{
      width: 100%;
      background: var(--color-white);
      height: 100%;
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

        .search-bar{
          display: flex;
          flex-direction: row-reverse;

          border: 1px solid var(--color-secondary);
          border-radius: 500px;

          transition: width .3s ease-in-out;

          padding: 3px;

          input{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;

            width: 180px;
            padding-left: 8px;

            border: 0;
            background: transparent;

            opacity: 0;
          }

          button{
            border: 0;
            border-radius: 50%;

            width: 35px;

            background: var(--color-white);
            color: var(--color-secondary);

            cursor: pointer;
          }

          .searched{
            position: absolute;
            top: 45px;
            left: 0;

            width: 200px;
            height: 200px;

            background: var(--color-white-two);

            li{
              color: var(--color-black);
            }
          }

          &:focus-within{
            width: 210px;

            & input{
              opacity: 1;
            }

            & .searched{
              display: ${props => props.visibleSearchedUsers ? 'flex' : 'none'}
            }
          }
        }

        li{
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
    /*@media screen and (max-width: 701px){
      display: none;
    }*/
  }

  .sidebar{
    position: fixed;
    background: var(--color-secondary);

    ul{
      @media screen and (max-width: 700px){
        display: flex;
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

          @media screen and (max-width: 700px){
            height: 3px;
            width: 100%;
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

export default Container;
