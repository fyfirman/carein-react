import React, { useState } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Form, Button, Text, Toast } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TextInput } from '../../components';
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
          Toast.show({ text: error.message }, 3000);
        }
      )
      .catch((error) => {
        Toast.show({ text: `Something went wrong:  ${error.message}` }, 3000);
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
      <View style={styles.headerContainer}>
        <Image
          style={styles.logo}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
      </View>
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
          <Button full onPress={handleSubmit}>
            <Text>Sign In</Text>
          </Button>
        </Form>
        <View style={styles.separator}>
          <Text>or</Text>
        </View>
        <View style={styles.registerContainer}>
          <Button full onPress={() => Actions.register()}>
            <Text>Register</Text>
          </Button>
        </View>
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
