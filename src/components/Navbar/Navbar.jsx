import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.items}>
        <li className={classes.item}>
          <a href='s1' className='app-link app-link_light'>
            Профиль
          </a>
        </li>
        <li className={classes.item}>
          <a href='s1' className='app-link app-link_light'>
            Диалоги
          </a>
        </li>
        <li className={classes.item}>
          <a href='s1' className='app-link app-link_light'>
            Новости
          </a>
        </li>
        <li className={classes.item}>
          <a href='s1' className='app-link app-link_light'>
            Музыка
          </a>
        </li>
        <hr className={classes.selector}/>
        <li className={classes.item}>
          <a href='s1' className='app-link app-link_light'>
            Настройки
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
