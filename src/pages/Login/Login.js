import React from 'react';
import { View, Image } from 'react-native';
import { Form, Item, Input, Label, Button, Text, Toast } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import API from '../../services';

const Login = () => {
  const saveTokenToStore = (token) => {
    console.log('token : ', `bearer ${token}`);
  };

  const handleSubmit = () => {
    const mockData = {
      username: 'dummy',
      password: '12345678'
    };

    API.postGenerateToken(mockData)
      .then((res) => {
        saveTokenToStore(res.token);
        Toast.show({ text: res.message }, 2000);
        setTimeout(() => Actions.home(), 2000);
      })
      .catch((error) => {
        Toast.show({ text: error.response.data.message }, 3000);
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
          <Item inlineLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item inlineLabel>
            <Label>Password</Label>
            <Input />
          </Item>
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

export default Login;
