import React from "react";
import './Navbar.scss'
import { Link } from 'react-router-dom';

const Navbar = function () {
  return (
    <div>
      <h1 className='App'>My name is Albert,<br />this is my first React-App</h1>
      <div className='navbar'>
        <Link className='navbar__item' to='/profile'>profile</Link>
        <Link className='navbar__item' to='/chats'>chats</Link>
        <Link className='navbar__item' to='/about'>about</Link>
      </div>
    </div>
  )
};

export default Navbar;