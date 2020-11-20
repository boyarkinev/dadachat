import './index.css';
import React, { Component } from 'react';
import { Route, withRouter, BrowserRouter, Redirect } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';

import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import Preloader from './components/commons/Preloader/Preloader';
import { initializeApp } from './redux/app-reducer';
import { withSuspense } from './hoc/withSuspense';
import store from './redux/redux-store';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

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
          <Route path='/' render={() => <Redirect to={'/profile'} />} />

          <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />

          <Route path='/dialogs' render={withSuspense(DialogsContainer)} />

          <Route path='/users' render={withSuspense(UsersContainer)}/>

          <Route path='/news' component={News} />

          <Route path='/music' component={Music} />

          <Route path='/settings' component={Settings} />

          <Route path='/login' render={() => <LoginPage />}/>

          {/* <Route path='*' render={() => <p>404 Страница не найдена</p>}/> */}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);


const DadachatApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default DadachatApp;