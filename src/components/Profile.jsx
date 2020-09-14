import React from 'react';

const Profile = () => {
  return (
    <div className='content'>
      <div>
        <img
          className='content__cover'
          src='https://www.globalpeoplestrategist.com/wp-content/uploads/2018/11/Canada.png?1596623420'
          alt='Cover'
        />
      </div>
      <div className='content__user'>
        <img
          className='content__user-pic'
          src='https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png'
          alt='User-pic'
        />
        <div className='content__user-data'>
          <h2 className='content__user-name'>Eugene B.</h2>
          <p className='content__user-info'>City: Moscow</p>
          <p className='content__user-info'>
            Status: <span>Feel Good Inc.</span>
          </p>
          <p className='content__user-info'>
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
      <div className='content__posts'>
        <h2 className='content__posts-title'>My Posts</h2>
        <form className='content__posts-form'>
          <textarea
            className='content__posts-message'
            placeholder='What new'></textarea>
          <div className='content__posts-send'>
            <button className='content__posts-btn'>Send</button>
          </div>
        </form>
      </div>
      <div className='content__comments'>
        <img
          src='https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png'
          className='content__user-avatar'
          alt='Guest Avatar'
        />
        <p className='content__user-comment'>
          Hi, how are you? Let start friendship.
        </p>
      </div>
      <div className='content__comments'>
        <img
          src='https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png'
          className='content__user-avatar'
          alt='Guest Avatar'
        />
        <p className='content__user-comment'>
          Why don't you comeback to paradise?
        </p>
      </div>
      <div className='content__comments'>
        <img
          src='https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png'
          className='content__user-avatar'
          alt='Guest Avatar'
        />
        <p className='content__user-comment'>Where is everybody?</p>
      </div>
      <div className='content__comments'>
        <img
          src='https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png'
          className='content__user-avatar'
          alt='Guest Avatar'
        />
        <p className='content__user-comment'>OK. Here we go.</p>
      </div>
    </div>
  );
};

export default Profile
