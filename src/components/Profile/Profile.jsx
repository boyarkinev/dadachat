import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={classes.content}>
      <div>
        <img
          className={classes.cover}
          src='https://www.globalpeoplestrategist.com/wp-content/uploads/2018/11/Canada.png?1596623420'
          alt='Cover'
        />
      </div>
      <ProfileInfo />
      <MyPosts postsData={props.state.postsData} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
