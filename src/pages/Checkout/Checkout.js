import React from 'react';
import { Container, Content, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Header } from '../../component';
import styles from './styles';

const propTypes = {};

const defaultProps = {};

const Checkout = (props) => {
  const { user } = props;

  const backToSelectWorker = () => {
    Actions.pop();
  };

  return (
    <Container>
      <Header iconName="back" title="Pembayaran" onPress={backToSelectWorker} />
      <Content style={styles.cardContainer}>
        <Text>Test</Text>
      </Content>
    </Container>
  );
};

Checkout.propTypes = propTypes;
Checkout.defaultProps = defaultProps;

export default Checkout;
