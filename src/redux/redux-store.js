import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import friendsReducer from './friends-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';


const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendsList: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer, // Взят из библиотеки redux-form
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;