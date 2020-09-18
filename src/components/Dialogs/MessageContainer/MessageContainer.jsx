import React from 'react';
import classes from './MessageContainer.module.css';
import MessageInfo from './MessageInfo/MessageInfo';
import Message from './Message/Message';

const MessageContainer = (props) => {
  return (
    <div className={classes.messageContainer}>
      <img src={props.img} className={classes.avatar} alt={props.description} />
      <MessageInfo name={props.userName} date={props.date} />
      <Message message={props.message} />
    </div>
  );
};

export default MessageContainer;
