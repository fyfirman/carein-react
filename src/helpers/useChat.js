import { useEffect, useRef, useState } from 'react';
import socketIOClient from 'socket.io-client';

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage';
const SOCKET_SERVER_URL = 'http://192.168.1.8:5000';

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId }
    });

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (newMessage) => {
      setMessages((oldMessage) => [...oldMessage, newMessage]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const sendMessage = (message) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, message);
  };

  return { messages, sendMessage };
};

export default useChat;
