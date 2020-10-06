import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {
  return <p className={classes.message}>{props.message}</p>;
};

export default Message;
