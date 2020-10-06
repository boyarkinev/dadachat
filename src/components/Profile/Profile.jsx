import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = () => {

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
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
