import messaging from '@react-native-firebase/messaging';
import Database from './Database';
import Api from '../Api';

const setToken = (userId) => {
  const promise = new Promise((resolve, reject) => {
    messaging()
      .getToken()
      .then((currentToken) => {
        if (currentToken) {
          const newData = {
            userId,
            token: currentToken
          };
          Database.addToken(newData);
          resolve(currentToken);
        } else {
          console.log('No Instance ID token available.');
          reject(new Error('No Instance ID token available.'));
        }
      });
  });

  return promise;
};

const sendTokenToServer = (userId) => {
  const promise = new Promise((resolve, reject) => {
    messaging()
      .hasPermission()
      .then((authStatus) => {
        if (authStatus === messaging.AuthorizationStatus.AUTHORIZED) {
          resolve(setToken(userId));
        }
        reject(new Error('Not authorized'));
      });
  });

  return promise;
};

const sendNotification = (payload) => {
  const promise = new Promise((resolve, reject) => {
    Api.postNotification(payload).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        reject(error);
      }
    );
  });

  return promise;
};

const CloudMessaging = {
  sendTokenToServer,
  sendNotification
};

export default CloudMessaging;
