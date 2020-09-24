import React from 'react';
import classes from './MessageTextForm.module.css';

const MessageTextForm = (props) => {
  
  const newPostElement = React.createRef();

  const addMessage = () => {
    props.dispatch({ type: 'ADD-MESSAGE' });
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.dispatch({ type: 'UPDATE-TEXT', newText: text });
  }

  const clickHandler = (event) => {
    event.preventDefault();
    addMessage();
  };

  return (
    <form className={classes.form}>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        className={classes.message}
        value={props.newSendText}
      />
      <div className={classes.send}>
        <button onClick={clickHandler} className={classes.button}>
          Отправить
        </button>
      </div>
    </form>
  );
};

export default MessageTextForm;
