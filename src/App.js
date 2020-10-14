import './index.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import DialogsContainer from './components/Dialogs/DialogsContainer';

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
            render={() => <DialogsContainer />}
          />

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/users'
            render={() => <UsersContainer /> }
          />
          <Route path='/login'
            render={() => <LoginPage /> }
          />
        </div>
      </div>
  );
};

export default App;
