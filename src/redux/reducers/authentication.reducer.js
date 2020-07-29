import ActionType from '../actions/authentication.action';

const initialState = {
  token: null
};

const authenticationReducer = (state = initialState, action) => {
  if (action.type === ActionType.SET_TOKEN) {
    return {
      ...state,
      token: `bearer ${action.token}`
    };
  }

  return state;
};

export default authenticationReducer;
