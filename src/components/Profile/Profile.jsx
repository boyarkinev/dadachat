import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

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
      <div className={classes.user}>
        <img
          className={classes.user_pic}
          src='https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png'
          alt='User-pic'
        />
        <div className={classes.user_data}>
          <h2 className={classes.user_name}>Евгений Б.</h2>
          <p className={classes.user_info}>Город: <span>Москва</span></p>
          <p className={classes.user_info}>
            Статус: <span>Feel Good Inc.</span>
          </p>
          <p className={classes.user_info}>
            Сайт:{' '}
            <a
              href='https://github.com/boyarkinev'
              className='app-link app-link_dark'
              target='blank'>
              github.io/boyarkinev
            </a>
          </p>
        </div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile
