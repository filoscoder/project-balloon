import { combineReducers } from 'redux';
import customerReducer from './customer';
import memberReducer from './member';
import kanbanReducer from './Kanban/kanbanReducer';


export default combineReducers({
  customers: customerReducer,
  members: memberReducer,
  kanbans: kanbanReducer
})
