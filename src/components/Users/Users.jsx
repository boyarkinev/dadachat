import * as axios from 'axios';
import React from 'react';
import classes from './Users.module.css'
import userPic from './../../img/userpic.png'

const Users = (props) => {

  if (props.users.length === 0) {
    if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        props.setUsers(response.data.items);
      })
    }
  }

  return (
    <div className={classes.friendsPage}>
      <h1 className={classes.title}>Найти друзей</h1>
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
                {"user.location.country"}, {"user.location.city"}
              </p>
              <div>
                {user.follow ? (
                  <button
                    onClick={() => {
                      props.unfollow(user.id);
                    }}
                    className={`${classes.button} ${classes.follow}`}>
                    Отписаться
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(user.id);
                    }}
                    className={`${classes.button} ${classes.unfollow}`}>
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
