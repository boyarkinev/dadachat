import classes from './MyPosts.module.css';
import reusable from '../../../styles/reusable.module.css';

import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Post from './Post/Post';
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
      <h2 className={reusable.pageTitle}>Мои посты</h2>

      <AddNewPostFormRedux onSubmit={onAddPost} className={reusable.form} />
      
      { postsElements }
    </div>
  );
});

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={reusable.form}>
      <Field
        component = {Textarea}
        validate={[required, maxLength]}
        name="newPostText"
        placeholder="Введите текст"
        className={reusable.textarea}
      />
      <div className={reusable.send}>
        <button className={reusable.submitButton}>Отправить</button>
      </div>
    </form>
  );
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;
