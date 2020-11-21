import classes from './Preloader.module.css'
import preloader from './../../../img/preloader.png';

import React from 'react'

const Preloader = () => {
  return (
    <div className={classes.preloader}>
      <img src={preloader} alt='Preloader' />
    </div>
  );
};

export default Preloader;
