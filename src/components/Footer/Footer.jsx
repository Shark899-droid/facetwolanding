import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { BsDot } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { RiTwitterLine } from 'react-icons/ri';
import { FiFacebook, FiYoutube } from 'react-icons/fi';
const Footer = () => {
  return (
    <>
      <div className='mainFooter'>
        <div className='innerMainFooter'>
          <div className='footerFirst'>
            <img
              src='https://th.bing.com/th/id/OIP.OkLnwFZRdqkc9mMENWUv2gHaFl?pid=ImgDet&rs=1'
              alt='logo'
            />
            <hr />
            <Link to='/' className='title'>
              Face Two
            </Link>
          </div>
          <div className='footerSecond'>
            <Link to='/'>Home</Link>
            <BsDot className='dots' />
            <Link to='/about-us'>About Us</Link>
            <BsDot className='dots' />
            <Link to='/contact-us'>Contact Us</Link>
            <BsDot className='dots' />
            <Link to='/download'>Download</Link>
          </div>
          <div className='footerThird'>
            <span style={{ color: 'white', fontSize: '18px' }}>
              Follow Us On
            </span>
            <div className='innerThird'>
              <AiOutlineInstagram className='iconsFoot' />
              <FaWhatsapp className='iconsFoot' />
              <RiTwitterLine className='iconsFoot' />
              <FiFacebook className='iconsFoot' />
              <FiYoutube className='iconsFoot' />
              <FaTiktok className='iconsFoot' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
