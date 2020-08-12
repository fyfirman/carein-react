import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Container, Content, Footer, Input, Icon, Button } from 'native-base';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { Header } from '../../components';
import { BubbleChat } from './components';
import styles from './styles';
import { Socket } from '../../services';
import { UserType } from '../../constant';
import { DateFormatter } from '../../helpers';

const propTypes = {
  listener: PropTypes.objectOf(PropTypes.any).isRequired,
  transactionId: PropTypes.string.isRequired
};

const defaultProps = {};

const Chat = (props) => {
  const { listener, transactionId } = props;

  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState('');

  useEffect(() => {
    Socket.initiateSocket(transactionId);

    Socket.subscribeToChat((error, newMessage) => {
      if (error) return;
      setMessages((oldMessage) => [...oldMessage, newMessage]);
    });
  }, []);

  const handleSubmit = () => {
    const data = {
      transaksiId: transactionId,
      message: input,
      userType: UserType.WORKER,
      time: Date.now()
    };

    Socket.sendMessage(data);
    setInput('');
  };

  return (
    <Container>
      <Header
        iconName="chevron-back-outline"
        title={listener.nama}
        onPress={() => Actions.pop()}
      />
      <Content>
        <View>
          {messages.map((item, index) => (
            <BubbleChat
              key={index}
              message={item.message}
              time={DateFormatter.getTime(item.time)}
              listener={item.userType === UserType.PATIENT}
            />
          ))}
        </View>
      </Content>
      <Footer
        transparent
        style={{
          backgroundColor: 'white',
          opacity: 0.9,
          borderRadius: 20,
          marginHorizontal: 10
        }}
      >
        <Input
          placeholder="Masukkan Pesan"
          style={styles.input}
          value={input}
          onChangeText={setInput}
        />
        <Button
          iconLeft
          transparent
          style={styles.button}
          onPress={handleSubmit}
        >
          <Icon name="paper-plane" style={styles.buttonIcon} />
        </Button>
      </Footer>
    </Container>
  );
};

Chat.propTypes = propTypes;
Chat.defaultProps = defaultProps;

export default Chat;
