import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import {
  Container,
  Content,
  Text,
  Footer,
  Thumbnail,
  Input,
  Right,
  Icon,
  Button
} from 'native-base';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { Header } from '../../components';
import { BubbleChat } from './components';
import styles from './styles';

const propTypes = {
  listener: PropTypes.objectOf(PropTypes.any).isRequired,
  transactionId: PropTypes.string.isRequired
};

const defaultProps = {};

const Chat = (props) => {
  const { listener, transactionId } = props;

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log(listener, transactionId);
  }, []);

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
              time={item.time}
              listener={item.worker}
              listenerPicture={listener.foto}
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
        <Input placeholder="Masukkan Pesan" style={styles.input} />
        <Button iconLeft transparent style={styles.button}>
          <Icon name="paper-plane" style={styles.buttonIcon} />
        </Button>
      </Footer>
    </Container>
  );
};

Chat.propTypes = propTypes;
Chat.defaultProps = defaultProps;

export default Chat;
