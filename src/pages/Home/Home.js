import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Container } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Header, CardMenu } from './components';
import styles from './styles';
import Api from '../../services';

const Home = (props) => {
  const [state, setState] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      Api.getCheckAuth().then(
        (res) => {
          Api.getUser(res.user.id).then(
            (data) => {
              setState({ user: data.pasien });
            },
            (e) => {
              console.log(`Get user failed : ${e.response.data.message}`);
            }
          );
        },
        (error) => {
          console.log(`Check auth failed : ${error.response.data.message}`);
        }
      );
    };

    fetchUser();
  }, []);

  const goToSelectWorker = (workerType) => {
    Actions.selectWorker(workerType);
  };

  return (
    <Container>
      <Header name={state.user.nama} />
      <View style={styles.cardContainer}>
        <CardMenu
          label="Dokter"
          imageSource={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          onPress={() => goToSelectWorker('doctor')}
        />
        <CardMenu
          label="Perawat"
          imageSource={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          onPress={() => goToSelectWorker('nurse')}
          reverse
        />
        <CardMenu
          label="Psikolog"
          imageSource={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          onPress={() => goToSelectWorker('psychologist')}
        />
      </View>
    </Container>
  );
};

export default Home;
