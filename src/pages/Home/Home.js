import React, { useEffect } from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Toast } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Header, CardMenu } from './components';
import styles from './styles';
import Api from '../../services';
import { UserActions } from '../../redux/actions';

const propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
  setUser: PropTypes.func.isRequired
};

const Home = (props) => {
  const { user, setUser } = props;

  useEffect(() => {
    const fetchUser = async () => {
      Api.getCheckAuth().then(
        (res) => {
          Api.getUser(res.user.id).then(
            (data) => {
              setUser(data.pasien);
            },
            (e) => {
              Toast.show({ text: e });
            }
          );
        },
        (error) => {
          Toast.show({ text: error });
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
      <Header name={user !== undefined ? user.nama : ''} />
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

Home.propTypes = propTypes;

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(UserActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
