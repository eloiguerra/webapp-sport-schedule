import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  min-width: 300px;

  padding: 8px;

  border-radius: 8px;
  background: var(--color-white);
  -webkit-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);

  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  input{
    border: none;
    outline: none;

    padding: 8px;

    border-radius: 500px;
    background: var(--color-gray-light);
    cursor: pointer;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
