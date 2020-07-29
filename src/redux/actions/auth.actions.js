import { authConstants } from '../constants';

const setToken = (token) => ({ type: authConstants.SET_TOKEN, token });

const authActions = {
  setToken
};

export default authActions;
