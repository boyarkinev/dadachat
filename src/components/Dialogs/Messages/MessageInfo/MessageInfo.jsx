import React from 'react';
import classes from './MessageInfo.module.css';

const MessageInfo = (props) => {
  return (
    <p className={classes.user}>
      {props.name} <span className={classes.date}>{props.date}</span>
    </p>
  );
};

export default MessageInfo;
