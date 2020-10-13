import React from 'react';
import classes from './Users.module.css';
import AvatarPlug from './../../img/userpic.svg';
import { NavLink } from 'react-router-dom';
import { followAPI } from '../../api/api';

const Users = (props) => {

  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={classes.friendsPage}>
      <div className={classes.findElems}>
        <h1 className={classes.title}>Найти друзей</h1>
        <input
          type='text'
          className={classes.findInput}
          placeholder='Введите имя'
        />
        <button className={classes.findButton}>
          Найти
        </button>
      </div>
      <div className={classes.pagination}>
        {pages.map((page, index) => {
          return (
            <span
            key={index}
              className={
                props.currentPage === page
                  ? `${classes.pageNumber} ${classes.pageNumberSelected}`
                  : `${classes.pageNumber}`
              }
              onClick={(event) => {
                props.onPageChanged(page);
              }}>
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map((user, index) => (
        <div key={index} className={classes.followingItems}>
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
              <p className={classes.plainText}>{user.status}</p>
            </div>
            <div>
              <p className={classes.mainText}>
                {'user.location.country'}, {'user.location.city'}
              </p>
              <div>
                {user.followed
                ?
                (<button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                  props.toggleFollowingProgress(true, user.id);
                  followAPI // Вынесли логику работы с Api в отдельный файл
                    .unfollow(user.id)
                    .then((data) => {
                      if (data.resultCode === 0) { props.unfollow(user.id) }
                      props.toggleFollowingProgress(false, user.id);
                    });
                }}
                className={`${classes.followButton} ${classes.follow}`}>Отписаться</button>)
                :
                (<button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                  props.toggleFollowingProgress(true, user.id);
                  followAPI // Вынесли логику работы с Api в отдельный файл
                    .follow(user.id)
                    .then((data) => {
                      if (data.resultCode === 0) { props.follow(user.id) }
                      props.toggleFollowingProgress(false, user.id);
                    });
                }}
                className={`${classes.followButton} ${classes.unfollow}`}>Подписаться</button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
