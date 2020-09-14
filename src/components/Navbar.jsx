import React from 'react';

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul className='nav__items'>
        <li className='nav__item'>
          <a href='s1' className='app-link app-link_light'>
            Profile
          </a>
        </li>
        <li className='nav__item'>
          <a href='s1' className='app-link app-link_light'>
            Messages
          </a>
        </li>
        <li className='nav__item'>
          <a href='s1' className='app-link app-link_light'>
            News
          </a>
        </li>
        <li className='nav__item'>
          <a href='s1' className='app-link app-link_light'>
            Music
          </a>
        </li>
        <li className='nav__item'>
          <a href='s1' className='app-link app-link_light'>
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
