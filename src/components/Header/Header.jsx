import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>DadaChat</h1>
      <div className={classes.login}>
        { props.isAuth 
          ? <div className={classes.loginContainer}>
              <div>{props.login}</div>
              <button onClick={props.logout} className={classes.logout}>Выйти</button>
            </div>
          : <NavLink to={'/login'}>Войти</NavLink> }
      </div>
    </header>
  );
};

export default Header;
