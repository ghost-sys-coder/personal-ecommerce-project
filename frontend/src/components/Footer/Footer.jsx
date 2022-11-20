import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { FaCcVisa, FaCcAmex, FaCcMastercard } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';

import './Footer.scss';

const Footer = () => {

  return (
    <motion.div
      whileInView={{ x: [250, 0] }}
      transition={{ duration: 0.85, ease: 'easeOut' }}
      className='footer'
    >
    <div className="footer--links">
     <div className="left--links">
        <Link to='/info'>info</Link>
        <Link to='/about'>about us</Link>
        <Link to='/journal'>journal</Link>
        <Link to='/privacy'>privacy policy</Link>
      </div>

      <div className="middle--links">
        <Link to='/support'>Support</Link>
        <Link to='/faq'>FAQ</Link>
        <Link to='/contact'>Contact Us</Link>
        <Link to='/shipping'>Shipping & Returns</Link>
      </div>

      <div className="newsletter-socials">
          <div className="newsletter-email">
          <h1>newsletter</h1>
          <p>Get 15% off your first purchase! Plus, be the first to know about sales, new product launches and exclusive offers!</p>
          <div className="email">
            <input type="email" name="newsletter-email" id="newsletter-eamil" placeholder='email' />
            <BsArrowRight />
          </div>
          </div>
          <div className="socials">
            <a href='https://twitter.com/i/flow/login' target="blank"><AiFillTwitterCircle /></a>
            <a href="https://www.instagram.com/accounts/login/"><AiFillInstagram /></a>
            <a href="https://www.facebook.com/login/"><FaFacebook /></a>
            <a href="https://www.pinterest.com/login/"><BsPinterest /></a>
          </div>
      </div>
      </div>

      <hr />
      
      <div className="copyright-payments">
        <p className="copyright"> &copy;forecaStore <span>@2022</span></p>
        <div className="payments">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcAmex />
        </div>
      </div>
    </motion.div>
  )
}

export default Footer