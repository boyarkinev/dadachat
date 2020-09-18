import React from 'react';
import classes from './TextForm.module.css';

const TextForm = (props) => {

  const newPostElement = React.createRef();

  const addPost = () => {
    const text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <form className={classes.form}>
      <textarea ref={newPostElement} className={classes.message} placeholder='Что нового'></textarea>
      <div className={classes.send}>
        <button onClick={addPost} className={classes.button}>Отправить</button>
      </div>
    </form>
  );
};

export default TextForm;
