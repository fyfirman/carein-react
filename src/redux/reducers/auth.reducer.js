import authConstants from '../constants/auth.constants';

const initialState = {
  token: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.SET_TOKEN:
      return {
        token: `bearer ${action.token}`
      };
    default:
      return state;
  }
};

export default authReducer;
