import {
  USER_DATA,
  ADD_MEDICEN,
  ADD_REMINDER,
  ADD_MEMBER,
  ADD_REPORTS,
  ADD_PRESCRIPTION,
} from '../types';

export const userData = (userDataObj) => {
  return {
    type: USER_DATA,
    payload: userDataObj,
  };
};

export const addMadicen = (medicen) => {
  return {
    type: ADD_MEDICEN,
    payload: medicen,
  };
};

export const storeAddReminder = (medicineReminder) => {
  return {
    type: ADD_REMINDER,
    payload: medicineReminder,
  };
};
export const addMember = (memberData) => {
  return {
    type: ADD_MEMBER,
    payload: memberData,
  };
};
export const storeReports = (reportsArray) => {
  return {
    type: ADD_REPORTS,
    payload: reportsArray,
  };
};
export const storePrescription = (prescriptionData) => {
  return {
    type: ADD_PRESCRIPTION,
    payload: prescriptionData,
  };
};
