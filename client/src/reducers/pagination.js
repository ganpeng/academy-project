import * as _ from 'lodash';
import { UPDATE_LEADER_PAGINATION, UPDATE_EXPERT_PAGINATION } from '../constants/';

const initialState = {
  leaderPagination: {},
  expertPagination: {}
};


export default (state = initialState, action = {}) => {
  switch(action.type) {
    case UPDATE_LEADER_PAGINATION:
      const leaderPagination = {pages: action.pages, currentPage: action.currentPage, total: action.total};
      return _.merge(state, {leaderPagination});
    case UPDATE_EXPERT_PAGINATION:
      const expertPagination = {pages: action.pages, currentPage: action.currentPage, total: action.total};
      return _.merge(state, {expertPagination});
    default:
      return state;
  }
}


