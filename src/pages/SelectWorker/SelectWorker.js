import React from 'react';
import { Container, Content } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { CardWorker } from './components';
import { Header } from '../../component';
import styles from './styles';

const propTypes = {};

const defaultProps = {};

const SelectWorker = (props) => {
  const { workerType } = props;

  const backToHome = () => {
    Actions.pop();
  };

  return (
    <Container>
      <Header iconName="back" title="Pilih Dokter" onPress={backToHome} />
      <Content style={styles.cardContainer}>
        <CardWorker
          name="dr. Lucy Purnama"
          photos={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          price={100000}
          distance={1.4}
        />
      </Content>
    </Container>
  );
};

SelectWorker.propTypes = propTypes;
SelectWorker.defaultProps = defaultProps;

export default SelectWorker;
