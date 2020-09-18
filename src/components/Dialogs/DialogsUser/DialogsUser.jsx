import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogsUser.module.css';

const DialogsUser = (props) => {
  return (
    <li className={classes.user}>
      <NavLink to={'/dialogs/' + props.id} activeClassName={classes.active}>
        {props.name}
      </NavLink>
    </li>
  );
};

export default DialogsUser;
