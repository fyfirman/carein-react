import React, { useState } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Form, Button, Thumbnail, Text, Toast, Icon, Content } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TextInput} from '../../components';
import { Header} from './components';
import styles from './styles';
import API from '../../services';
import { AuthActions } from '../../redux/actions';
import { LocalStorage } from '../../helpers';

const propTypes = {
  setToken: PropTypes.func.isRequired
};

const defaultProps = {};

const Login = (props) => {
  const { setToken } = props;

  const [formState, setFormState] = useState({
    values: {}
  });

  const handleSubmit = () => {
    API.postGenerateToken(formState.values)
      .then(
        (res) => {
          setToken(res.token);
          LocalStorage.storeToken(res.token);
          Toast.show({ text: res.message }, 1000);
          setTimeout(() => Actions.home(), 1000);
        },
        (error) => {
          Toast.show({ text: error.response.data.message }, 3000);
        }
      )
      .catch((error) => {
        Toast.show(
          { text: `Something went wrong:  ${error.response.data.message}` },
          3000
        );
      });
  };

  const handleChange = (name, newValue) => {
    setFormState({
      ...formState,
      values: {
        ...formState.values,
        [name]: newValue
      }
    });
  };

  return (
    <View>
    <Header />
      <Button transparent onPress={() => Actions.loginWorker()}>
        <Icon name="chevron-back-outline" style={{color:'white',fontSize:30,position:'absolute'}}/>
      </Button>
       {/* <Button transparent  onPress={() => Actions.loginWorker()}>
            <Icon name='medkit-outline' style={{color:'white',fontSize:36}}/>
          </Button> */}

      
      {/* <View style={styles.logoContainer}>
        <Thumbnail
          square
          large
          style={styles.logoheader}
          source={require('../../assets/masker.png')}
        />
        <Text style={styles.textheader}>Care In</Text>
      </View> */}
      {/* <View style={styles.headerContainer}>
        <Image
          style={styles.logo}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
      </View> */}
      <View style={styles.formContainer}>
        <Form style={styles.loginForm}>
          <TextInput
            label="Username"
            onChangeText={(newValue) => handleChange('username', newValue)}
            autoFocus
          />
          <TextInput
            label="Password"
            onChangeText={(newValue) => handleChange('password', newValue)}
          />

          <Button
            full
            onPress={() => Actions.homeWorker()}
            style={styles.button_save}
          >
            <Text>Masuk</Text>
          </Button>
        </Form>
        {/* <Button
          transparent
          light
          style={styles.separator}
          onPress={() => Actions.register()}
        >
          <Text style={styles.textseparator}>
            Belum memiliki akun ? Daftar disini
          </Text>
        </Button> */}
      </View>
    </View>
  );
};

Login.navigationOptions = {
  header: null
};

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(AuthActions, dispatch);
};

export default connect(null, mapDispatchToProps)(Login);
