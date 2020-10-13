import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>DadaChat</h1>
      <div className={classes.login}>
      {props.isAuth ? props.login
      : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
