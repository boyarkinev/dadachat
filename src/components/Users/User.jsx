import React from 'react';
import classes from './User.module.css';
import AvatarPlug from './../../img/userpic.svg';
import { NavLink } from 'react-router-dom';

const User = ({
  user,
  followingInProgress,
  unfollow,
  follow
}) => {
  return (
    <div className={classes.followingItems}>
      <NavLink to={'/profile/' + user.id} className={classes.navUserpic}>
        <img
          src={user.photos.large != null ? user.photos.large : AvatarPlug}
          alt='UserPic'
          className={classes.userpic}
        />
      </NavLink>
      <div className={classes.infoItems}>
        <div className={classes.infoItem}>
          <p className={classes.mainText}>{user.name}</p>
          <p className={classes.plainText}>{user.status === null ? 'Статус не указан' : user.status}</p>
        </div>
        <div>
          <p className={classes.mainText}>
            Здесь задумывалось показать страну
          </p>
          <div>
            {user.followed ? (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  unfollow(user.id);
                }}
                className={`${classes.followButton} ${classes.unfollow}`}>
                Отписаться
              </button>
            ) : (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  follow(user.id);
                }}
                className={`${classes.followButton} ${classes.follow}`}>
                Подписаться
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
