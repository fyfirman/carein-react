import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import {
  Container,
  Content,
  Footer,
  Input,
  Icon,
  Button,
  Toast
} from 'native-base';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import Api, { useChat } from '../../services';
import { Header } from '../../components';
import { BubbleChat } from './components';
import styles from './styles';
import { DateFormatter, LocalStorage } from '../../helpers';

const propTypes = {
  listener: PropTypes.objectOf(PropTypes.any).isRequired,
  sender: PropTypes.objectOf(PropTypes.any).isRequired,
  transactionId: PropTypes.string.isRequired
};

const defaultProps = {};

const Chat = (props) => {
  const { listener, transactionId, sender } = props;

  const { messages, sendMessage } = useChat(transactionId);

  const [input, setInput] = useState('');

  const [userType, setUserType] = useState(null);

  useEffect(() => {
    LocalStorage.getUserType().then(setUserType);
  }, []);

  const handleSubmit = () => {
    const data = {
      transaksiId: transactionId,
      isi: input,
      pengirimId: sender.id,
      userType,
      time: Date.now()
    };

    console.log('Transaksi ID : ', transactionId);
    sendMessage(data);
    setInput('');

    Api.postChat(transactionId, { isi: input }).then(
      (res) => {
        console.log('Message sent');
      },
      (error) => {
        Toast.show({
          text: error.response.data.message,
          duration: 3000
        });
      }
    );
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
              message={item.isi}
              time={DateFormatter.getTime(item.time)}
              listener={item.pengirimId !== sender.id}
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
