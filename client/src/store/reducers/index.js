import { combineReducers } from 'redux';

import memberReducer from './member';
import kanbanReducer from './Kanban/kanbanReducer';
import projectReducer from './Kanban/projectReducer';


export default combineReducers({
  members: memberReducer,
  kanbans: kanbanReducer,
  projects: projectReducer
})
