import React from 'react';
import classes from './TextForm.module.css';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profile-reducer';

const TextForm = (props) => {
  
  const newPostElement = React.createRef();

  const addPost = () => {
    const action = addPostActionCreator();
    props.dispatch(action);
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    const action = updatePostActionCreator(text)
    props.dispatch(action);
  }

  const clickHandler = (event) => {
    event.preventDefault();
    addPost();
  };
  
  return (
    <form className={classes.form}>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        className={classes.message}
        value={props.newPostText}
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

export default TextForm;
