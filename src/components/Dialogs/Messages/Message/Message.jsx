import classes from './Message.module.css';

import React from 'react';

const Message = (props) => {
  return <p className={classes.message}>{props.message}</p>;
};

export default Message;
