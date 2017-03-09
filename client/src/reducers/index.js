import { combineReducers } from 'redux';

import experts from './expert';
import leaders from './leader';
import pagination from './pagination';
import constitution from './constitution';
import authentication from './authentication';


const rootReducer = combineReducers({
  experts,
  leaders,
  pagination,
  constitution,
  authentication
});

export default rootReducer;


