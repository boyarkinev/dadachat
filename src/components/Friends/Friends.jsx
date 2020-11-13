import React from 'react';
import classes from './Friends.module.css';
import FriendsList from './FriendsList/FriendsList';

const Friends = (props) => {
  return (
    <div className={classes.friendsContainer}>
      <h3 className={classes.title}>Друзья</h3>
      <FriendsList friendsList={props.friendsList} />
    </div>
  );
};

export default Friends;
