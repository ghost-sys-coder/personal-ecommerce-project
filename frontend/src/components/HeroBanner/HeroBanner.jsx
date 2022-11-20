import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './HeroBanner.scss';

const HeroBanner = () => {
  return (
    <motion.div
        whileInView={{ x: [250, 0]}}
        transition={{duration: 0.85, ease: 'easeOut'}}
        className='heroBanner'
    >
        <h1>Shop for all your products</h1>
        <p>Discover the best products at foreca</p>
        <Link to='/'>shop now</Link>
    </motion.div>
  )
}

export default HeroBanner