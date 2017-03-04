import { SET_LEADERS } from '../constants/';

const initialState = [];

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_LEADERS:
      return action.leaders;
    default:
      return state;
  }
}

