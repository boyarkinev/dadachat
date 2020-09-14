import React from 'react';
import classes from './Profile.module.css';

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
          className={classes.userpic}
          src='https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png'
          alt='User-pic'
        />
        <div className={classes.user_data}>
          <h2 className={classes.user_name}>Eugene B.</h2>
          <p className={classes.user_info}>City: Moscow</p>
          <p className={classes.user_info}>
            Status: <span>Feel Good Inc.</span>
          </p>
          <p className={classes.user_info}>
            Web-site:{' '}
            <a
              href='https://github.io/boyarkinev'
              className='app-link app-link_dark'
              target='blank'>
              github.io/boyarkinev
            </a>
          </p>
        </div>
      </div>
      <div className={classes.posts}>
        <h2 className={classes.posts_title}>My Posts</h2>
        <form className={classes.posts_form}>
          <textarea
            className={classes.posts_message}
            placeholder='What new'></textarea>
          <div className={classes.posts_send}>
            <button className={classes.posts_button}>Send</button>
          </div>
        </form>
      </div>
      <div className={classes.comments}>
        <img
          src='https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png'
          className={classes.avatar}
          alt='Guest Avatar'
        />
        <p className={classes.comment}>
          Hi, how are you? Let start friendship.
        </p>
      </div>
      <div className={classes.comments}>
        <img
          src='https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png'
          className={classes.avatar}
          alt='Guest Avatar'
        />
        <p className={classes.comment}>
          Why don't you comeback to paradise?
        </p>
      </div>
      <div className={classes.comments}>
        <img
          src='https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png'
          className={classes.avatar}
          alt='Guest Avatar'
        />
        <p className={classes.comment}>Where is everybody?</p>
      </div>
      <div className={classes.comments}>
        <img
          src='https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png'
          className={classes.avatar}
          alt='Guest Avatar'
        />
        <p className={classes.comment}>OK. Here we go.</p>
      </div>
    </div>
  );
};

export default Profile
