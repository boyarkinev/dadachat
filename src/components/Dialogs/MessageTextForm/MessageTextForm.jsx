import React from 'react';
import classes from './MessageTextForm.module.css';

const MessageTextForm = (props) => {

  const newPostElement = React.createRef();

  const onAddMessage = () => {
    props.addMessage();
  };

  const onNewMessageChange = () => {
    const text = newPostElement.current.value;
    props.updateNewMessageText(text);
  }

  const clickHandler = (event) => {
    event.preventDefault();
    onAddMessage();
  };

  return (
    <form className={classes.form}>
      <textarea
        onChange={onNewMessageChange}
        ref={newPostElement}
        className={classes.message}
        value={props.newMessageText}
        placeholder="Введите текст"
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
