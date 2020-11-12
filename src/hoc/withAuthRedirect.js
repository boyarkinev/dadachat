/*
Это пример ХОК - high order component. Он работает так:
- принимает в себя компонент в качестве аргумента
- проверяет авторизацию и перенаправляет на страницу авторизации,
или открывает страницу, если с авторизацией все ок
*/

import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to='./login' />;
      return <Component {...this.props} />;
    }
  }

  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
};
