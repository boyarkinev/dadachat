import classes from './Messages.module.css';

import React from 'react';
import MessageInfo from './MessageInfo/MessageInfo';
import Message from './Message/Message';

const Messages = (props) => {
  return (
    <div>
      {props.messagesData.map((message, i) => {
        return (
          <div
            key={i}
            img={message.avatar}
            date={message.date}
            message={message.message}
            className={classes.messages}>
            <img
              src={message.avatar}
              className={classes.avatar}
              alt='User Avatar'
            />
            <MessageInfo name={message.userName} date={message.date} />
            <Message message={message.message} />
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
