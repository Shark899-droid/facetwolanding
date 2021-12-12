import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='headerMain'>
        <div className='headerContainer'>
          <div className='leftHeader'>
            <img
              src='https://th.bing.com/th/id/OIP.OkLnwFZRdqkc9mMENWUv2gHaFl?pid=ImgDet&rs=1'
              alt='logo'
            />
            <hr />
            <Link to='/' className='title'>
              Face Two
            </Link>
            <Link to='/about-us'>About Us</Link>
            <Link to='/contact-us'>Contact Us</Link>
            <Link to='/download'>Download</Link>
          </div>
          <div className='rightHeader'>
            <Link to='/sign-in' id='signIn'>
              Sign In
            </Link>
            <Link to='/sign-up' id='signUp'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
