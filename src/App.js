import './index.css';

import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {

  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.friendsList} />

        <div className='app-wrapper-content'>
          <Route
            path='/profile'
            render={() => <Profile
              profilePage={props.state.profilePage}
              newSendText={props.state.newSendText}
              dispatch={props.dispatch}
            />}
          />
          <Route
            path='/dialogs'
            render={() => <Dialogs 
              dialogsPage={props.state.dialogsPage}
              newSendText={props.state.newSendText}
              dispatch={props.dispatch} />}
          />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
  );
};

export default App;
