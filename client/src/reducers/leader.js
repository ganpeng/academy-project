import { SET_LEADERS, DELETE_LEADER } from '../constants/';

const initialState = [];

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_LEADERS:
      return action.leaders;
    case DELETE_LEADER:
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

