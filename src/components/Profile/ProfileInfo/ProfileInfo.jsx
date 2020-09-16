import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.user}>
        <img
          className={classes.user_pic}
          src='https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png'
          alt='User-pic'
        />
        <div className={classes.user_data}>
          <h2 className={classes.user_name}>Евгений Б.</h2>
          <p className={classes.user_info}>
            Город: <span>Москва</span>
          </p>
          <p className={classes.user_info}>
            Статус: <span>Feel Good Inc.</span>
          </p>
          <p className={classes.user_info}>
            Сайт:{' '}
            <NavLink
              to='https://github.com/boyarkinev'
              className='app-link app-link_dark'
              target='blank'>
              github.io/boyarkinev
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
