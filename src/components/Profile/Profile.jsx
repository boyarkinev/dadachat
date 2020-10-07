import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import coverPicElemOne from './../../img/cover_pic_elem_1.svg'
import coverPicElemTwo from './../../img/cover_pic_elem_2.svg'
import coverPicElemThree from './../../img/cover_pic_elem_3.svg'

const Profile = () => {

  return (
    <div className={classes.content}>
      <div className={classes.cover}>
        <img
          className={classes.pic}
          src= {coverPicElemTwo}
          alt='Cover'
        />
        <img
          className={classes.pic}
          src= {coverPicElemThree}
          alt='Cover'
        />
        <img
          className={classes.pic}
          src= {coverPicElemOne}
          alt='Cover'
        />
      </div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
