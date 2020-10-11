import React from 'react'
import preloader from './../../img/preloader.png';
import classes from './Preloader.module.css'

const Preloader = (props) => {
  return (
    <div className={classes.preloader}>
      <img src={preloader} alt='Preloader' />
    </div>
  );
};

export default Preloader;
