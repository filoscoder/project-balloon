import { combineReducers } from 'redux';
import customerReducer from './customer';
import memberReducer from './member';

export default combineReducers({
  customers: customerReducer,
  members: memberReducer,
})
