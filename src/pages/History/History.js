import React from 'react';
import { Container, Content, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Header } from '../../components';
import { CardHistory } from './components';

const propTypes = {};

const defaultProps = {};

const mockData = [
  {
    name: 'dr. Lucy Purnama',
    photoSource: 'https://reactnative.dev/img/tiny_logo.png',
    status: 'perjalanan',
    date: '12-03-2020'
  },
  {
    name: 'dr. Lucy Purnama',
    photoSource: 'https://reactnative.dev/img/tiny_logo.png',
    status: 'off',
    date: '12-03-2020'
  },
  {
    name: 'dr. Lucy Purnama',
    photoSource: 'https://reactnative.dev/img/tiny_logo.png',
    status: 'off',
    date: '12-03-2020'
  },
  {
    name: 'dr. Lucy Purnama',
    photoSource: 'https://reactnative.dev/img/tiny_logo.png',
    status: 'off',
    date: '12-03-2020'
  },
  {
    name: 'dr. Lucy Purnama',
    photoSource: 'https://reactnative.dev/img/tiny_logo.png',
    status: 'off',
    date: '12-03-2020'
  },
  {
    name: 'dr. Lucy Purnama',
    photoSource: 'https://reactnative.dev/img/tiny_logo.png',
    status: 'off',
    date: '12-03-2020'
  },
  {
    name: 'dr. Lucy Purnama',
    photoSource: 'https://reactnative.dev/img/tiny_logo.png',
    status: 'off',
    date: '12-03-2020'
  }
];

const History = () => {
  return (
    <Container>
      <Header iconName="back" title="Riwayat" onPress={() => Actions.pop()} />
      <Content>
        {mockData.map((element, index) => (
          <CardHistory
            key={index}
            name={element.name}
            photoSource={{ uri: element.photoSource }}
            status={element.status}
            date={element.date}
            onPress={() => Actions.chat(123)}
          />
        ))}
      </Content>
    </Container>
  );
};

History.propTypes = propTypes;
History.defaultProps = defaultProps;

export default History;
