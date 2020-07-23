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
        <CardMenu label="Dokter" />
        <CardMenu label="Perawat" reverse />
        <CardMenu label="Psikolog" />
      </View>
    </Container>
  );
};

export default Home;
