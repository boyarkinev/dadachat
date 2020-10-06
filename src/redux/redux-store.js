import { createStore, combineReducers } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import friendsReducer from './friends-reducer';


const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendsList: friendsReducer,
});

const store = createStore(reducers);

export default store;