import { BASE_URL } from 'react-native-dotenv';

const addBaseURL = (string) => {
  console.log('String is ', BASE_URL.slice(0, -7) + string);
  return BASE_URL.slice(0, -7) + string;
};

const StringBuilder = {
  addBaseURL
};

export default StringBuilder;
