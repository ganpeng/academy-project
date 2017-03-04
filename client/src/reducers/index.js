import { combineReducers } from 'redux';

import experts from './expert';
import leaders from './leader';
import pagination from './pagination';


const rootReducer = combineReducers({
  experts,
  leaders,
  pagination
});

export default rootReducer;


