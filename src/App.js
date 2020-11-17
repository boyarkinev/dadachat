import './index.css';
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Preloader from './components/commons/Preloader/Preloader';

import { initializeApp } from './redux/app-reducer';

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if(!this.props.initialized) {
      return (
        <div className='preloaderContainer'>
          <Preloader />
        </div>
      )
    }

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

          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <LoginPage />}
          />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);
