import React from 'react';
import './Footer.css';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faLocationPin, faPhone, } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="bg-dark footer-container">
            <div className='d-flex justify-content-between flex-wrap d-block mx-auto' style={{ width: '90%' }}>
                <div className='contact-us'>
                    <h2 className='text-warning my-4'>Contact Us</h2>
                    <div>
                        <address className='text-white'>
                            <FontAwesomeIcon className='text-warning pe-4' icon={faLocationPin}></FontAwesomeIcon>
                            Address: Street Name, city name,country name.</address>
                        <p className='text-white'>
                            <FontAwesomeIcon className='text-warning pe-4' icon={faPhone}></FontAwesomeIcon>
                            Phone: Phone Number</p>
                        <p className='text-white'>
                            <FontAwesomeIcon className='text-warning pe-4' icon={faLocationArrow}></FontAwesomeIcon>
                            Email: example@def.com</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-warning my-4'>Menu Items</h2>
                    <NavLink><Link to={'/'}>Home</Link></NavLink>
                    <NavLink><Link to={'/'}>Home</Link></NavLink>
                    <NavLink><Link to={'/'}>Home</Link></NavLink>
                    <NavLink><Link to={'/'}>Home</Link></NavLink>
                    <NavLink><Link to={'/'}>Home</Link></NavLink>
                </div>
                <div className='newsletter'>
                    <h2 className='text-warning my-4'>Newsletter</h2>
                    <p className='text-white'>subscriber our newsletter for letest update</p>
                    <input type="email" placeholder='Enter Your Email' />
                    <br />
                    <button className='btn btn-warning text-white mt-3 py-2 px-4'>Subscribe</button>
                </div>
            </div>
            <div>
                <div className='social-menu'>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <p className='text-white text-center'>copyright &copy; Majedul Haque Rakib</p>
            </div>
        </div>
    );
};

export default Footer;