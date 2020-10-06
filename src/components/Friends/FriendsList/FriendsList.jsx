import React from 'react';
import Friend from './Friend/Friend';
import classes from './FriendsList.module.css';

const FriendsList = (props) => {
  const friendsElements = props.state.friends.map((friend, i) => (
    <Friend name={friend.name} avatar={friend.avatar} key={i} />
  ));

  return <div className={classes.list}>{friendsElements}</div>;
};

export default FriendsList;
