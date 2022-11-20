import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';


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

  return (
    <div className='new-arrivals'>
        <motion.h1 animate={{x: [250, 0]}}>New Arrivals</motion.h1>
      <Link to='/'>view all</Link>
      
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
       {arrivalsData.map((item)=> (
        <SwiperSlide>
          <motion.div className='item'>
            <motion.div className='image'>
              <img src={item.imgUrl} alt={item.title} />
            </motion.div>
            <motion.div className='content'>
              <motion.h3>{item.title}</motion.h3>
              <motion.p>${item.price}</motion.p>
            </motion.div>
          </motion.div>
        </SwiperSlide>
       ))}
      </Swiper>
    </div>
  )
}

export default NewArrivals