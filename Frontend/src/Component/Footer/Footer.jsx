import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo-png.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className='footer'>
        <div className="container footer-content">
            <div className='footer-intro'>
                <Link to='/' className='footer-logo text-decoration-none'>
                    <img src={logo} alt="SnapDeal logo" />
                    <p>Snap<span>Deal</span></p>
                </Link>
                <p>Explore endless products, unbeatable deals. Shop with ease, anytime, anywhere. Elevate your online experience!</p>
            </div>
            <div className='footer-menu'>
                <h4>Menu</h4>
                <ul>
                    <li>
                        <Link to='/' className='footer-menu-link'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/Mens' className='footer-menu-link'>
                            Men's Wear
                        </Link>
                    </li>
                    <li>
                        <Link to='/Womens' className='footer-menu-link'>
                            Women's Wear
                        </Link>
                    </li>
                    <li>
                        <Link to='/Kids' className='footer-menu-link'>
                            Kids Wear
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="footer-social">
                <h4>Contact</h4>
                <ul>
                    <li>
                        <FaLocationDot/>
                        <p>Kumarkhli, Kushtia, Bangladesh</p>
                    </li>
                    <li>
                        <FaWhatsappSquare/>
                        <p>+880 0131368347</p>
                    </li>
                    <li>
                        <MdMarkEmailUnread/>
                        <p>rahitulislam213@gmail.com</p>
                    </li>
                </ul>
            </div>
        </div>
        <hr className='text-light m-0 p-2' />
        <p className='text-center'>&copy;Copyright {year} || all right reserved by SnapDeal </p>
    </footer>
  )
}

export default Footer