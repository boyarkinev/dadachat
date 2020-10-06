import { connect } from 'react-redux';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStatToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      const action = addPostActionCreator()
      dispatch(action);
    },
    updateNewPostText: (text) => {
      const action = updatePostActionCreator(text);
      dispatch(action);
    }
  }
}

const MyPostsContainer = connect(mapStatToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
