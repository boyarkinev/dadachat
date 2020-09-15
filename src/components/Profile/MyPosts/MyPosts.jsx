import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div className={classes.posts}>
      <h2 className={classes.title}>Мои посты</h2>
      <form className={classes.form}>
        <textarea
          className={classes.message}
          placeholder='Что нового'></textarea>
        <div className={classes.send}>
          <button className={classes.button}>Отправить</button>
        </div>
      </form>
      <Post message="Привет. Как дела?" counter="3"/>
      <Post message="Это мой первый пост!" counter="5"/>
      <Post message="меня не остановить :)" counter="4"/>
    </div>
  );
};

export default MyPosts;
