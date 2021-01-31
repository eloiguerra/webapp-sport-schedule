import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8px;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const OptionsList = styled.ul`
  display: flex;
`;

export const Option = styled.li`
  position: relative;
  padding: 16px;

  color: var(--color-gray);
  font-size: 1.6rem;

  cursor: pointer;

  &:hover{
    background: var(--color-gray-light);
  }

  &.active::after{
    content: "";

    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 2px;

    background: var(--color-secondary);
  }
`;

export const ContainerPublications = styled.div`
  width: 100%;
`;

export const ContainerFriends = styled.div`
  display: flex;
  flex-direction: column;

  width: 95%;
  max-width: 600px;
  min-width: 300px;

  margin-top: 16px;

  border-radius: 8px;
  background: var(--color-white);

  -webkit-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);

  h2{
    padding: 8px 0;
    text-align: center;
  }
`;

export const ContainerFriendsCard = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const FriendCard = styled.div`
  width: 200px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;

  img{
    width: 80px;
    height: 80px;

    border-radius: 4px;
  }

  a{
    margin-left: 8px;

    font-size: 1.8rem;
    font-weight: 700;
  }
`;
