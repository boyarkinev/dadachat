import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileHeader from './ProfileHeader/ProfileHeader';

const Profile = ({profile, status, updateStatus}) => {

  return (
    <div className={classes.content}>
      <ProfileHeader />
      <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
