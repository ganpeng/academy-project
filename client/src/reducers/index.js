import { combineReducers } from 'redux';

import experts from './expert';
import leaders from './leader';
import pagination from './pagination';
import constitution from './constitution';
import authentication from './authentication';
import carousels from './carousel';


const rootReducer = combineReducers({
  experts,
  leaders,
  pagination,
  constitution,
  carousels,
  authentication
});

export default rootReducer;


