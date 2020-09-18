import React from 'react';
import Avatar from '../../../Avatar/Avatar';
import classes from './Friend.module.css';

const Friend = (props) => {
  return (
    <div className={classes.item}>
      <Avatar avatar={props.avatar} />
      <p className={classes.name}>{props.name}</p>
    </div>
  );
};

export default Friend;
