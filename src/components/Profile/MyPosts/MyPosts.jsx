import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
// import TextForm from '../TextForm/TextForm';
// import { addPostActionCreator, updatePostActionCreator } from './../../../redux/profile-reducer';

const MyPosts = (props) => {

  const newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    console.log(props)
    props.updateNewPostText(text)
  }

  const clickHandler = (event) => {
    event.preventDefault();
    onAddPost();
  };
  
  const postsElements = props.postsData.map((post, i) => <Post message={post.message} counter={post.likesCounter} key={i}/>)

  return (
    <div className={classes.posts}>
      <h2 className={classes.title}>Мои посты</h2>
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

      {/* <TextForm dispatch={props.dispatch} newPostText={props.newPostText} /> */}

      { postsElements }

    </div>
  );
};

export default MyPosts;
