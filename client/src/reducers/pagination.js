import * as _ from 'lodash';
import { UPDATE_LEADER_PAGINATION } from '../constants/';

const initialState = {
  leaderPagination: {}
};


export default (state = initialState, action = {}) => {
  switch(action.type) {
    case UPDATE_LEADER_PAGINATION:
      const leaderPagination = {pages: action.pages, currentPage: action.currentPage};
      return _.merge(state, {leaderPagination});
    default:
      return state;
  }
}


