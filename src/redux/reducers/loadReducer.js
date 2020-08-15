import { LoadConstants } from '../constants';

const initialState = { load: false };

const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case LoadConstants.SET_LOAD:
      return { load: !initialState };
    default:
      return state;
  }
};

export default loadReducer;
