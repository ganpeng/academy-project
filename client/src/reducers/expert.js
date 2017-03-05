import { SET_EXPERTS } from '../constants/';

const initialState = [];


export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_EXPERTS:
      return action.experts;
    default:
      return state;
  }
}
