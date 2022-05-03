import React from 'react';
import './Footer.css';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark footer-container">
            <div className='d-flex justify-content-between mx-auto' style={{ width: '90%' }}>
                <div className='contact-us'>
                    <h2 className='text-primary'>Contact Us</h2>
                    <div>
                        <address className='text-white'>
                            Street Name, city name,country name.</address>
                        <p className='text-white'>
                            Phone: Phone Number</p>
                        <p className='text-white'>
                            Email: example@def.com</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-primary'>Menu Items</h2>
                    <NavLink><Link to={'/'}>Home</Link></NavLink>
                    <NavLink><Link to={'/'}>Home</Link></NavLink>
                    <NavLink><Link to={'/'}>Home</Link></NavLink>
                    <NavLink><Link to={'/'}>Home</Link></NavLink>
                    <NavLink><Link to={'/'}>Home</Link></NavLink>
                </div>
                <div>
                    <h2 className='text-primary'>Newsletter</h2>
                    <p className='text-white'>subscriber our newsletter for letest update</p>
                    <input type="email" placeholder='Enter Your Email' />
                    <br />
                    <button className='btn btn-primary my-5 py-2 px-4'>Subscribe</button>
                </div>
            </div>
            <div>
                <div className='social-menu'>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <p className='text-white text-center'>copyright@ Majedul Haque Rakib</p>
            </div>
        </div>
    );
};

export default Footer;