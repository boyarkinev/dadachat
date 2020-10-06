import React from 'react';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profile-reducer';
import TextForm from './TextForm';

const TextFormContainer = (props) => {
  
  const addPost = () => {
    props.dispatch(addPostActionCreator);
  };

  const onPostChange = (text) => {
    const action = updatePostActionCreator(text)
    props.dispatch(action);
  }
  
  return (
    <TextForm updateNewPostText={onPostChange} addPost={addPost} newPostText={props.newPostText} />
  );
};

export default TextFormContainer;
