import React from 'react';
import classes from './Post.module.css';
import AvatarPlug from '../../../../img/userpic.svg';

const Post = (props) => {
  return (
    <div className={classes.post}>
      <img
        src={AvatarPlug}
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
