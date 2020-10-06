import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsContainer from '../Friends/FriendsContainer';
import classes from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.items}>
        <li className={classes.item}>
          <NavLink
            to='/profile'
            className='app-link app-link_light'
            activeClassName={classes.active}>
            Профиль
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to='/dialogs'
            className='app-link app-link_light'
            activeClassName={classes.active}>
            Диалоги
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to='/news'
            className='app-link app-link_light'
            activeClassName={classes.active}>
            Новости
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to='/music'
            className='app-link app-link_light'
            activeClassName={classes.active}>
            Музыка
          </NavLink>
        </li>
        <hr className={classes.selector} />
        <li className={classes.item}>
          <NavLink
            to='settings'
            className='app-link app-link_light'
            activeClassName={classes.active}>
            Настройки
          </NavLink>
        </li>
        <hr className={classes.selector} />
      </ul>
      <FriendsContainer />
    </nav>
  );
};

export default Navbar;
