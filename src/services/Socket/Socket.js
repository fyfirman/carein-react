/* eslint-disable no-console */
import io from 'socket.io-client';
import { BASE_URL } from 'react-native-dotenv';

let socket;

const initiateSocket = (room) => {
  socket = io('http://103.214.112.138');
  console.log(`Connecting socket...`);
  if (socket && room) {
    socket.emit('joinRoom', { transaksiId: room });
    console.log(`Connected to room (${room}).`);
  }
};

const subscribeToChat = (cb) => {
  console.log(!!socket);
  if (socket) {
    console.log('Subscribe');
    socket.on('receiveChat', (data) => {
      console.log(`Chat sent! (${data.message})`);
      return cb(null, data); // why there is null parameter
    });
  }
};

const sendMessage = (data) => {
  if (socket) {
    socket.emit('sendChat', data);
    console.log(`Sending chat (${data.message})...`);
  }
};

const Socket = {
  initiateSocket,
  subscribeToChat,
  sendMessage
};

export default Socket;
