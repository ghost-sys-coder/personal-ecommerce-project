import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { newCollections } from './NewCollectionData';

import './NewCollection.scss';

const NewCollection = () => {

  return (
    <div className="newcollection">
        <h1>New Collection</h1>
        <div className="collection--container">
            {newCollections.map(item => (
                <motion.div>
                    <motion.div className='image'>
                        <motion.img src={item.imgUrl} />
                        <motion.div className='content'>
                            <motion.h2>{item.title}</motion.h2>
                            <Link to='/shop'>shop now</Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default NewCollection