import React from 'react';
import classes from './Users.module.css';
import Paginator from '../commons/Paginator/Paginator';
import User from './User';

const Users = ({
  currentPage,
  totalItemsCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}) => {
  return (
    <div className={classes.friendsPage}>
      <div className={classes.findElems}>
        <h1 className={classes.title}>Найти друзей</h1>
        <input
          type='text'
          className={classes.findInput}
          placeholder='Введите имя'
        />
        <button className={classes.findButton}>Найти</button>
      </div>

      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalItemsCount}
        pageSize={pageSize}
      />

      {users.map((user) => (
        <User
          user={user}
          followingInProgress={props.followingInProgress}
          unfollow={props.unfollow}
          follow={props.follow}
          key={user.id}
        />
      ))}
    </div>
  );
};

export default Users;
