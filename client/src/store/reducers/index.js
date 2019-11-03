import { combineReducers } from 'redux';
import customerReducer from './customer';
import memberReducer from './member';
import kanbanReducer from './Kanban/kanbanReducer';
import projectReducer from './Kanban/projectReducer';

export default combineReducers({
  customers: customerReducer,
  members: memberReducer,
  kanbans: kanbanReducer,
  projects: projectReducer
})
