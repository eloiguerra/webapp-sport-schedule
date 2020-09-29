import styled, {keyframes} from 'styled-components';

const toastInRight = keyframes`
  from {
	  transform: translateX(100%);

	}
	to {
	  transform: translateX(0);
	}
`;

export const NotificationContainer = styled.div`
  position: fixed;
  top: 12px;
  right: 12px;

  z-index: 99999;

  transition: transform .6s ease-in;
  animation: ${toastInRight} .7s;

  color: var(--color-white);
`;

export const NotificationToast = styled.div`
  position: relative;

  background: ${props => props.type};
  transition: .3s ease;

  width: 300px;
  height: 100px;

  button{
    position: absolute;
    top: 0;
    right: 5px;

    border: none;
    outline: none;
    background: transparent;

    font-size: 1.8rem;
    color: var(--color-white);
    text-shadow: 0 1px 0 #fff;

    cursor: pointer;
  }

  .notification-image{
    margin: 0 8px;
    float: left;
    height: 100%;
    display: flex;
    align-items: center;

    svg{
      width: 30px;
      height: 30px;
    }
  }

  .notification-content{
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;


    .notification-title{
      text-align: left;
      margin-top: 0;
      margin-bottom: 8px;

      width: 100%;
    }

    .notification-message{
      text-align: left;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      font-size: 1.5rem;
    }
  }

  &:hover{
    box-shadow: 0 0 12px #fff;
    opacity: 1;
    cursor: pointer;
  }
`;
