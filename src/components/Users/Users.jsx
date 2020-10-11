import React from 'react';
import classes from './Users.module.css';
import userPic from './../../img/userpic.svg';

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
        {pages.map((page) => {
          return (
            <span
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
      {props.users.map((user) => (
        <div key={user.id} className={classes.followingItems}>
          <img
            src={user.photos.small != null ? user.photos.small : userPic}
            alt='UserPic'
            className={classes.userpic}
          />
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
                {user.follow ? (
                  <button
                    onClick={() => {
                      props.unfollow(user.id);
                    }}
                    className={`${classes.followButton} ${classes.follow}`}>
                    Отписаться
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(user.id);
                    }}
                    className={`${classes.followButton} ${classes.unfollow}`}>
                    Подписаться
                  </button>
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
