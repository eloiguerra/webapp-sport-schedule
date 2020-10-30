import React, {useState, useEffect} from 'react'
import {NotificationContainer, NotificationToast} from './styles';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faExclamationCircle,
  faExclamationTriangle,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

export default function Toast({type, title, message/*toastList, autoDelete, dismissTime*/}){
  // const { toastList, position, autoDelete, dismissTime } = props;
  // const [list, setList] = useState(toastList);

  // useEffect(() => {
  //     setList([...toastList]);
  // }, [toastList]);

  // useEffect(() => {
  //     const interval = setInterval(() => {
  //         if (autoDelete && toastList.length && list.length) {
  //             deleteToast(toastList[0].id);
  //         }
  //     }, dismissTime);

  //     return () => {
  //         clearInterval(interval);
  //     }
  //     //
  // }, [toastList, autoDelete, dismissTime, list]);

  // const deleteToast = id => {
  //     const listItemIndex = list.findIndex(e => e.id === id);
  //     const toastListItem = toastList.findIndex(e => e.id === id);
  //     list.splice(listItemIndex, 1);
  //     toastList.splice(toastListItem, 1);
  //     setList([...list]);
  // }

  // return (
  //     <>
  //         <NotificationContainer>
  //             {
  //                 list.map((toast, i) =>
  //                     <NotificationToast key={i}>
  //                         <button onClick={() => deleteToast(toast.id)}>
  //                             X
  //                         </button>
  //                         <div className = "notification-image">
  //                             {/* <img src={toast.icon} alt="" /> */}
  //                         </div>
  //                         <div className = "notification-content">
  //                             <p className="notification-title">{toast.title}</p>
  //                             <p className="notification-message">
  //                                 {toast.description}
  //                             </p>
  //                         </div>
  //                     </NotificationToast>
  //                 )
  //             }
  //         </NotificationContainer>
  //     </>
  // );
// }
  const [toastProperties, setToastProperties] = useState({type, title, message});

  useEffect(() => {
    setToastProperties({
      type,
      title,
      message
    });
  }, [type, title, message])

  const removeToast = () => {
    setToastProperties({});
  }

  return (
    <>
    {toastProperties.message &&
      <NotificationContainer>
        <NotificationToast type = {toastProperties.type}>
          <button onClick = {removeToast}>x</button>
          <div className = "notification-image">
            {toastProperties.type === 'success'
              ? <FontAwesomeIcon icon = {faCheckCircle} />
              : <FontAwesomeIcon icon = {faExclamationTriangle} />
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
