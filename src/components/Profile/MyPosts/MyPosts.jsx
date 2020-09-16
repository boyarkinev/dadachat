import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

let postData = [
  {id: 1, message: "Привет. Как дела?", likesCounter: 3},
  {id: 2, message: "Это мой первый пост!", likesCounter: 5},
  {id: 3, message: "Меня не остановить :)", likesCounter: 4},
]

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
      <Post message={postData[0].message} counter={postData[0].likesCounter} />
      <Post message={postData[1].message} counter={postData[1].likesCounter} />
      <Post message={postData[2].message} counter={postData[2].likesCounter} />
    </div>
  );
};

export default MyPosts;
