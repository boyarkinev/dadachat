import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../commons/FormsControls/FormsControls';

const maxLength = maxLengthCreator(120);

const MyPosts = React.memo(props => {

  const onAddPost = (values) => {
    props.addPost(values.newPostText);
  };
  
  const postsElements = props.postsData.map((post, i) => (
    <Post message={post.message} counter={post.likesCounter} key={i} />
  ));

  return (
    <div className={classes.posts}>
      <h2 className={classes.title}>Мои посты</h2>

      <AddNewPostFormRedux onSubmit={onAddPost} className={classes.form} />
      
      { postsElements }
    </div>
  );
});

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.form}>
      <Field
        component = {Textarea}
        validate={[required, maxLength]}
        name="newPostText"
        placeholder="Введите текст"
        className={classes.message}
      />
      <div className={classes.send}>
        <button className={classes.button}>Отправить</button>
      </div>
    </form>
  );
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;
