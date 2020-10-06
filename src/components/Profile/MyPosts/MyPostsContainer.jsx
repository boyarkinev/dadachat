import React from 'react';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStatToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPostActionCreator(text));
    },
    onPostChange: (text) => {
      dispatch(updatePostActionCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStatToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
