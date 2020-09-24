import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
import TextForm from '../TextForm/TextForm';

const MyPosts = (props) => {
  
  const postsElements = props.postsData.map((post, i) => <Post message={post.message} counter={post.likesCounter} key={i}/>)

  return (
    <div className={classes.posts}>
      <h2 className={classes.title}>Мои посты</h2>

      <TextForm dispatch={props.dispatch} newSendText={props.newSendText} />

      { postsElements }

    </div>
  );
};

export default MyPosts;
