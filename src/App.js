import './index.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />

        <div className='app-wrapper-content'>
          <Route
            path='/profile/:userId?'
            render={() => <ProfileContainer />}
          />
          <Route
            path='/dialogs'
            render={() => <Dialogs />}
          />

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/users'
            render={() => <UsersContainer /> }
          />
        </div>
      </div>
  );
};

export default App;
