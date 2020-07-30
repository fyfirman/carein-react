import React from 'react';
import { Container, Content, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Header } from '../../components';

const propTypes = {};

const defaultProps = {};

const History = () => {
  return (
    <Container>
      <Header iconName="back" title="Riwayat" onPress={() => Actions.pop()} />
      <Content>
        <Text>History page</Text>
      </Content>
    </Container>
  );
};

History.propTypes = propTypes;
History.defaultProps = defaultProps;

export default History;
