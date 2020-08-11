import React, { useEffect } from 'react';
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
  interlocutor: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const mockData = [
  {
    message: 'Halo, apa kabar denganmu hari ini ada yang bisa saya bantu ? ',
    time: '19:48',
    worker: true
  },
  {
    message: 'Hi  sdadad sdada',
    time: '19:50',
    worker: false
  },
  {
    message: 'Halo',
    time: '19:48',
    worker: true
  },
  {
    message: 'Hi adasdasdasd asdasd',
    time: '19:50',
    worker: false
  },
  {
    message: 'Halo',
    time: '19:48',
    worker: true
  },
  {
    message: 'Hi',
    time: '19:50',
    worker: false
  },
  {
    message: 'Halo',
    time: '19:48',
    worker: true
  },
  {
    message: 'Hi',
    time: '19:50',
    worker: false
  },
  {
    message: 'Halo',
    time: '19:48',
    worker: true
  },
  {
    message: 'Hi',
    time: '19:50',
    worker: false
  },
  {
    message: 'Hi',
    time: '19:50',
    worker: false
  }
];

const Chat = (props) => {
  const { interlocutor } = props;

  useEffect(() => {
    console.log(interlocutor);
    return () => {};
  }, []);

  return (
    <Container>
      <Header
        iconName="chevron-back-outline"
        title="Obrolan"
        onPress={() => Actions.pop()}
      />
      <Content>
        <View>
          {mockData.map((item, index) => (
            <BubbleChat
              key={index}
              message={item.message}
              time={item.time}
              interlocutor={item.worker}
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
