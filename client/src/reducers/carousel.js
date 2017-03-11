
import { SET_CAROUSELS, DELETE_CAROUSEL, UPDATE_CAROUSEL } from '../constants/';

const initialState = [];

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_CAROUSELS:
      return action.carousels;
    case UPDATE_CAROUSEL:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], { show: !state[action.index].show }),
        ...state.slice(action.index + 1)
      ]
    case DELETE_CAROUSEL:
      if (action.index > -1) {
        const _state = [...state]
          _state.splice(action.index, 1);
        return _state;
      }
      return  state;
    default:
      return state;
  }
}

