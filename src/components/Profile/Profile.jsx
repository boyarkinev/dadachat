import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileHeader from './ProfileHeader/ProfileHeader';

const Profile = ({profile, status, updateStatus, isOwner, saveProfile, savePhoto}) => {

  return (
    <div className={classes.content}>
      <ProfileHeader />
      <ProfileInfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        saveProfile={saveProfile}
        savePhoto={savePhoto}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
