import React, { useRef, useState } from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';

import { images } from '../../constants/index.js';


/**
 * ! IMPORT THE REQUIRED MODULES
 */
import { Pagination } from 'swiper';

/**
 * ! IMPORT THE SWIPER STYLES
 */
 import "swiper/css";
 import "swiper/css/pagination";

 import '../../styles.css'
 

import { arrivalsData } from './ArrivalsData.js';



import './NewArrivals.scss';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
  const [show, setShow] = useState(false);

  const desktopData = [
    {
      id: '1',
      title: 'track suits',
      price: 75,
      imgUrl: images.trainingTrack2
    },
    {
      id: '2',
      title: 'printed hoodies',
      price: 50,
      imgUrl: images.men3DprintedHoodies1
    },
    {
      id: '3',
      title: 'shirts',
      price: 40,
      imgUrl: images.menLongSleeve2
  }
  ]

  return (
    <div className='new-arrivals'>
        <motion.h1 animate={{x: [250, 0]}}>New Arrivals</motion.h1>
      <Link to='/'>view all</Link>

      {/* FOR THE DESKTOP */}
      <motion.div
        className='desktop--container'
        animate={{ x: [300, 0] }}
        transition={{duration: 0.85, ease: 'easeInOut'}}
      >
        {desktopData.map((item) => (
          <motion.div
            className='item'
          >
            <div className="image">
            <AiOutlineHeart id='love' />
              <img src={item.imgUrl} alt={item.title} />
              <div className="cart-svg">
                <BsCartPlus id='cart' />
              </div>
            </div>
            <div className="content">
              <h2>{item.title}</h2>
              <p>${item.price}</p>
            </div>
            
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default NewArrivals