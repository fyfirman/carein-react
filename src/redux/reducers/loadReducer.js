import { LoadConstants } from '../constants';

const initialState = { load: false };

const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case LoadConstants.SET_LOAD:
      console.log('state changed : ', { load: !state.load });
      return { load: !state.load };
    default:
      return state;
  }
};

export default loadReducer;
