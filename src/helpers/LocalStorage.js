import AsyncStorage from '@react-native-community/async-storage';

const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem('token', `Bearer ${token}`);
    console.log('Token set!', token);
  } catch (error) {
    console.log('Token is not set', error);
  }
};

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token;
  } catch (error) {
    return null;
  }
};

const LocalStorage = {
  storeToken,
  getToken
};

export default LocalStorage;
