import React, {useState, useEffect} from 'react'
import {NotificationContainer, NotificationToast} from './styles';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faExclamationCircle,
  faExclamationTriangle,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

export default function Toast({type, title, message}) {
  const [toastProperties, setToastProperties] = useState({type, title, message});

  useEffect(() => {
    switch (type) {
      case 'error':
        setToastProperties({
          ...toastProperties,
          type: 'var(--color-error)',
          icon: faExclamationCircle
        });
        break;
      case 'success':
        setToastProperties({
          ...toastProperties,
          type: 'var(--color-error)',
          icon: faCheckCircle
        });
        break;
      case 'warning':
        setToastProperties({
          ...toastProperties,
          type: 'var(--color-error)',
          icon: faExclamationTriangle
        });
        break;
      default:
        setToastProperties({});
        break;
    }
  }, [])

  const removeToast = () => setToastProperties({});


  return (
    <>
    {toastProperties.message &&
      <NotificationContainer>
        <NotificationToast type = {toastProperties.type}>
          <button onClick = {removeToast}>x</button>
          <div className = "notification-image">
            {toastProperties.icon &&
              <FontAwesomeIcon icon = {toastProperties.icon} />
            }
          </div>
          <div className = "notification-content">
            <p className = "notification-title">{toastProperties.title}</p>
            <p className = "notification-message">{toastProperties.message}</p>
          </div>
        </NotificationToast>
      </NotificationContainer>
    }
    </>
  )
}
