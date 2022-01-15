import {USER_DATA} from './types';
const initState = {
  userData: null,
};

const userdataReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
};

export default userdataReducer;
