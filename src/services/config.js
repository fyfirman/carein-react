import { LocalStorage } from '../helpers';

const withToken = async () => {
  const token = await LocalStorage.getToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

const config = {
  withToken
};

export default config;
