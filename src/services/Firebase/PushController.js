import { useEffect } from 'react';
import PushNotification from 'react-native-push-notification';
import { NotificationType } from '../../constant';

const PushController = () => {
  useEffect(() => {
    PushNotification.configure({
      onRegister(token) {
        console.log('TOKEN:', token);
      },

      onNotification(notification) {
        if (notification.foreground) {
          PushNotification.localNotification(notification);
        }
        console.log(`Notification received : ${notification.data.type}`);
        switch (notification.data.type) {
          case NotificationType.NEW_ORDER || NotificationType.ORDER_CANCELED:
            // reload home worker
            // set state reload home to redux
            break;
          case NotificationType.ORDER_ACCEPTED ||
            NotificationType.ORDER_DECLINED ||
            NotificationType.ORDER_DONE:
            // reload home
            // set state reload home worker to redux
            break;
          case NotificationType.CHAT:
            // do nothing
            break;
          default:
            break;
        }
      },
      senderID: '378976790564',
      popInitialNotification: true,
      requestPermissions: true
    });
  }, []);

  return null;
};

export default PushController;
