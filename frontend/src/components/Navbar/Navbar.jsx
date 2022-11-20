import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiSearch, BiUserCircle } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { AiOutlineRight } from 'react-icons/ai';

import { motion } from 'framer-motion';

import TopHeader from '../TopHeader/TopHeader';

import './Navbar.scss'


const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const links = ['shop', 'journal', 'about']
    return (
    <div className='app__navigation-container'>
        <TopHeader />
        <div className="app__navbar">
            <div className="toggle">
                    {!toggle ? <HiMenuAlt4 onClick={() => setToggle(true)} /> : <HiX onClick={() => setToggle(false)} />}
                    {toggle && (
                        <motion.div
                            whileInView={{ x: [250, 0] }}
                            transition={{ duration: 0.85, ease: 'easeOut' }}
                            className='app__navbar-menu'
                        >
                            <div className="login-signup">
                                <Link className='login' to='/login'>login</Link>
                                <div className="vertical-line"></div>
                                <Link className='/signup' to='/signup'>sign up</Link>
                            </div>
                            <Link onClick={()=> setToggle(false)} className='menu-shop' to='/shop'>
                                <p>shop</p>
                                <AiOutlineRight />
                            </Link>
                            <Link onClick={()=> setToggle(false)} className='journal' to='/journal'>journal</Link>
                            <Link onClick={() => setToggle(false)} className='about' to='/about'>about</Link>
                            <hr />
                            <Link onClick={() => setToggle(false)} className='favourites' to='/favourites'>
                                <AiOutlineHeart />
                                <p>Favourites(0)</p>
                            </Link>
                        </motion.div>
                    )}
            </div> 
            <nav className="app__navbar-links">
                {links.map((link, index) => (
                    <Link key={index} to= {`/${link}`}>{ link }</Link>
               ))} 
            </nav>
            <div className="logo">
                <Link to='/'>forecaStore</Link>
            </div>       
            <div className="app__navbar-icons">
                <FiSearch />
                <Link to='/favourites' className='hide'>
                    <AiOutlineHeart />
                </Link>
                <Link to='/welcome' className='hide'>
                    <BiUserCircle />
                </Link>
                <div className="cart">
                    <AiOutlineShoppingCart />
                    <div className="cart-total">0</div>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Navbar