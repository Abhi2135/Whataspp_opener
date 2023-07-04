import {ActionTypes} from './action-types';

export const addData = data => {
  return {type: ActionTypes.ADD_DATA, payload: data};
};

export const deleteData = data => {
  return {type: ActionTypes.DELETE_DATA, payload: data};
};

export const clearAllData = () => {
  return {type: ActionTypes.CLEAR_ALL_DATA};
};
