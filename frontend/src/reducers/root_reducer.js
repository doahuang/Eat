import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './session_errors_reducer';
import reviews from './review_reducer';

export default combineReducers({
  session,
  errors,
  reviews
});