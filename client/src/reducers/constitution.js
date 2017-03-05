import { SET_CONSTITUTION } from '../constants/';

const initialState = {};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_CONSTITUTION:
      return action.constitution;
    default:
      return state;
  }
}
