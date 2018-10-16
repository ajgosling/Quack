import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import channelsReducer from './channels_reducer';
import messagesReducer from './message_reducer';

export default combineReducers({
  users: usersReducer,
  channels: channelsReducer,
  messages: messagesReducer
});
