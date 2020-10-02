import styled from 'styled-components';

const Container = styled.div`
  width: calc(100% - 70px);
  margin-top: 70px;

  @media screen and (min-width: 701px){
    margin-left: 70px;
  }

  @media screen and (max-width: 700px){
    width: 100%;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .photo-container{
    position: relative;

    .profile-photo{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    span{
      display: flex;
      align-items: center;

      position: absolute;
      right: 40px;
      bottom: 10px;

      padding: 4px;

      border: 2px solid var(--color-gray);
      border-radius: 50%;
      background: var(--color-white);

      svg{
        color: var(--color-gray);

        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const FormDescription = styled.form`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  button{
    margin-top: 8px;

    width: 90%;
    max-width: 320px;

    padding: 8px;

    background: var(--color-white);

    border: 1px solid;
    border-color: var(--color-primary);
    color: var(--color-primary);

    transition: all .3s;

    cursor: pointer;

    &:hover{
      background: var(--color-primary);

      border-radius: 50px;
      border: 1px solid;
      border-color: var(--color-white);
      color: var(--color-white);
    }
  }
`;

export default Container;
