import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.post}>
      <img
        src='https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png'
        className={classes.avatar}
        alt='Guest Avatar'
      />
      <p className={classes.message}>{ props.message }</p>
      <div className={classes.likes}>
        <div className={`${classes.like} ${classes.active}`}></div>
        <p className={classes.counter}>{ props.counter }</p>
      </div>
    </div> 
  ); 
};

export default Post;
