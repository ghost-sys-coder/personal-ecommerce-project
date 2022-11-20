import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import NewCollection from '../../components/NewCollection/NewCollection';
import NewArrivals from '../../components/NewArrivals/NewArrivals.jsx';

import './Home.scss'
const Home = () => {
  return (
    <div className='home'>
      <HeroBanner />
      <NewCollection />
      <NewArrivals />
    </div>
  )
}

export default Home