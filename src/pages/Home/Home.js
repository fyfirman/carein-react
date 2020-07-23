import React from 'react';
import { View } from 'react-native';
import { Container, Content } from 'native-base';
import { Header, CardMenu } from './components';
import styles from './styles';

const Home = (props) => {
  return (
    <Container>
      <Header />
      <View style={styles.cardContainer}>
        <CardMenu
          label="Dokter"
          imageSource={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
        <CardMenu
          label="Perawat"
          imageSource={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          reverse
        />
        <CardMenu
          label="Psikolog"
          imageSource={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
      </View>
    </Container>
  );
};

export default Home;
