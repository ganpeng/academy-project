import { combineReducers } from 'redux';

import experts from './expert';
import leaders from './leader';
import pagination from './pagination';
import constitution from './constitution';


const rootReducer = combineReducers({
  experts,
  leaders,
  pagination,
  constitution
});

export default rootReducer;


