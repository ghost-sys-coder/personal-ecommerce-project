import React from 'react';
import { Link } from 'react-router-dom';
import { FaShippingFast } from 'react-icons/fa';
import { GiReturnArrow } from 'react-icons/gi';
import { MdOutlinePayment } from 'react-icons/md';
import Footer from '../../components/Footer/Footer';

import './Welcome.scss';

const Welcome = () => {
  return (
    <div className='welcome page-position'>
        <div className="welcome__form-container">
        <h1 className="login--heading">login</h1>
        <p className="login--text">Please enter your email and password</p>
        
        <form action="/welcome" className="form" id="form">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder='johndoe@example.com' />
            
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder='Enter your password...' />
            
            <Link to='/forgot-password'>Forgot password?</Link>
            
            <input type="submit" value="log in" />
        </form>
        
        <div className="welcome__new-customer">
            <p className="new-customer">New Customer?</p>
            <Link to='/signup'>create an account</Link>
        </div>
        
        </div>
        
        <div className="welcome--icons">
            <div className="icons">
                <FaShippingFast />
                <div className="icon--text">
                    <h2>free delivery network</h2>
                    <Link to='/'>Click to learn more</Link>
                </div>
            </div>
            <div className="icons">
                <GiReturnArrow />
                <div className="icon--text">
                    <h2>returns</h2>
                    <Link to='/'>Returns goods in 30 days</Link>
                </div>
            </div>
            <div className="icons">
                <MdOutlinePayment />
                <h2>Secured Payment</h2>
                <Link to='/'>Shop safely</Link>
            </div>
        </div>
        <Footer /> 
    </div>
  )
}

export default Welcome;