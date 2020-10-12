import React from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../../Preloader/Preloader';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }
  /*
  Изначально сюда проходит два profile - initialState и state.
  Первый равен null, так как мы присвоили ему это значение.
  Второй содержит данные с сервера, но они еще не загрузились в initialState.
  Чтобы страница не падала при первом обращении, написали условие, при котором
  в случае пустого state она перерисовывается с данными, который к тому моменту
  уже загрузились.
  */

  return (
    <div>
      <div className={classes.user}>
        <div className={classes.user_pic}>
          <img src={props.profile.photos.large} alt='User-pic' />
        </div>
        <div className={classes.user_data}>
          <h2 className={classes.user_name}>{props.profile.fullName}</h2>
          <p className={classes.user_info}>
            Город: <span></span>
          </p>
          <p className={classes.user_info}>
            Статус: <span>{props.profile.aboutMe}</span>
          </p>
          <p className={classes.user_info}>
            Сайт: {''}
            <NavLink
              to={props.profile.contacts.vk}
              className='app-link app-link_dark'
              target='blank'>
              {props.profile.contacts.vk}
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
