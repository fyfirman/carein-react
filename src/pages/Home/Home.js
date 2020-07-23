import React from 'react';
import { Container, Content, Text } from 'native-base';
import { Header } from './components';

const Home = (props) => {
  return (
    <Container>
      <Header />
      <Content>
        <Text>This is homepage</Text>
      </Content>
    </Container>
  );
};

export default Home;
