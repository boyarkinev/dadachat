import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogsUser.module.css';

const DialogsUser = (props) => {
  return (
    <div>
      {props.usersData.map((user, i) => {
        return (
          <li name={user.name} id={user.id} key={i} className={classes.user}>
            <NavLink
              to={'/dialogs/' + user.id}
              activeClassName={classes.active}>
              {user.name}
            </NavLink>
          </li>
        );
      })}
    </div>
  );
};

export default DialogsUser;
