import React from 'react';
import classes from './Avatar.module.css';

const Avatar = (props) => {
  return (
    <div>
      <img src={props.avatar} alt="User Avatar" className={classes.avatar}/>
    </div>
  );
};

export default Avatar;
