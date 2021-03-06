import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './error_reducer';
import entities from './entities_reducer';
import ui from './ui_reducer';

export default combineReducers({
  session,
  errors,
  entities,
  ui
});