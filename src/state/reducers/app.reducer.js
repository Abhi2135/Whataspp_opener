import {ActionTypes} from '../action-types';

const initialState = {
  data: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_DATA:
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    case ActionTypes.DELETE_DATA:
      return {
        ...state,
        data: [...action.payload],
      };
    case ActionTypes.CLEAR_ALL_DATA:
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
};

export default appReducer;
