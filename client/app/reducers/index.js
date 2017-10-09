import { combineReducers } from 'redux';
import messagesReducer from './../reducers/messagesReducer';
import peopleReducer from './../reducers/peopleReducer';

const chatReducer = combineReducers({
  messagesReducer,
  peopleReducer
});

export default chatReducer;