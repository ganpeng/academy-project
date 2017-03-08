import { SET_EXPERTS, DELETE_EXPERT } from '../constants/';

const initialState = [];


export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_EXPERTS:
      return action.experts;
    case DELETE_EXPERT:
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
