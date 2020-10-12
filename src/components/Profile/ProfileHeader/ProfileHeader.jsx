import React from 'react';
import classes from './ProfileHeader.module.css'
import coverPicElemOne from '../../../img/cover_pic_elem_1.svg'
import coverPicElemTwo from '../../../img/cover_pic_elem_2.svg'
import coverPicElemThree from '../../../img/cover_pic_elem_3.svg'

const ProfileHeader = () => {
  return (
    <div className={classes.cover}>
      <img className={classes.pic} src={coverPicElemTwo} alt='Cover' />
      <img className={classes.pic} src={coverPicElemOne} alt='Cover' />
      <img className={classes.picabsolute} src={coverPicElemThree} alt='Cover'
      />
    </div>
  );
};

export default ProfileHeader;
