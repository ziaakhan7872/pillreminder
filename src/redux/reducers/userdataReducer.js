import {
  USER_DATA,
  ADD_MEDICEN,
  ADD_REMINDER,
  ADD_MEMBER,
  ADD_REPORTS,
  ADD_PRESCRIPTION,
} from '../types';

const initState = {
  userData: null,
  addMadicen: [],
  medicineReminder: [],
  memberData: [],
  reportsData: [],
  prescriptionData: [],
};

const userdataReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case ADD_MEDICEN:
      return {
        ...state,
        addMadicen: action.payload,
      };
    case ADD_REMINDER:
      return {
        ...state,
        medicineReminder: action.payload,
      };
    case ADD_MEMBER:
      return {
        ...state,
        memberData: action.payload,
      };
    case ADD_REPORTS:
      return {
        ...state,
        memberData: action.payload,
      };
    case ADD_PRESCRIPTION:
      return {
        ...state,
        prescriptionData: action.payload,
      };

    default:
      return state;
  }
};

export default userdataReducer;
