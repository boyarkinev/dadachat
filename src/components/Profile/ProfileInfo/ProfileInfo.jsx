import React from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../../commons/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import AvatarPlug from '../../../img/userpic.svg'
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWhithHooks';

const ProfileInfo = (props) => {

  if (!props.profile) {
    return (
      <div className={classes.preloaderContainer} >
        <Preloader />
      </div>
    ) 
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
          <img src={props.profile.photos.large !=null ? props.profile.photos.large : AvatarPlug} alt='Avatar' />
        </div>
        <div className={classes.user_data}>
          <h2 className={classes.user_name}>{props.profile.fullName}</h2>
          <p className={classes.user_info}>
            Город: <span>Не указан</span>
          </p>
          <p className={classes.user_info}>
            Статус: <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
          </p>
          <p className={classes.user_info}>
            Сайт: {props.profile.contacts.website !=null ? props.profile.contacts.website : ' Не указан'}
            <NavLink
              to='ya.ru'
              target='blank'>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
