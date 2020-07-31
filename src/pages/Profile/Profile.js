import React, { useEffect } from 'react';
import { Image, View, Text } from 'react-native';
import { Container, Content, Toast } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Header } from '../../components';
import styles from '../History/components/CardHistory/styles';

const propTypes = {};

const defaultProps = {};

const History = () => {
  useEffect(() => {}, []);

  return (
    <Container>
      <Content>
        <View style={styles.containter}>
          <View>
            <Image
              style={styles.image}
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            />
            <Text style={styles.name}>Firmansyah Yanuar</Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.info}>
              <Text>Tempat lahir</Text>
              <Text>Bandung</Text>
            </View>
            <View style={styles.info}>
              <Text>Tanggal Lahir</Text>
              <Text>12 Agustus 1999</Text>
            </View>
            <View style={styles.info}>
              <Text>Jenis Kelamin</Text>
              <Text>70 kg</Text>
            </View>
            <View style={styles.info}>
              <Text>Tinggi Badan</Text>
              <Text>167 cm</Text>
            </View>
          </View>
        </View>
        <View />
      </Content>
    </Container>
  );
};

History.propTypes = propTypes;
History.defaultProps = defaultProps;

export default History;
