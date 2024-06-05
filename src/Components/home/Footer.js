import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png'
import { FaLinkedin, FaSquareInstagram, FaXTwitter } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

export default function Footer() {
  return (
    <div className='footer' id='foter'>
        <div className='footer-content'>
<div className='footer-content-left'>
<div className='footer-logo'>
  <img src={logo} alt='logo' className='logo'/>
  <p>Frution</p>
</div>
<p>Experience the burst of fresh flavors. Order our healthy, refreshing treats now.</p>
<div className='footer-social-icons'>
<a href='https://twitter.com'><FaXTwitter /></a>
<a href='https://instagram.com/'><FaSquareInstagram /></a>
<a href='https://facebook.com'><FaFacebookSquare /></a>
<a href='https://linkedin.com'><FaLinkedin /></a>
</div>
</div><div className='footer-content-center'>
   <h3>COMPANY</h3>
   <ul>
    <li>Home</li>
    <li>About us</li>
    <li>Delivery</li>
    <li>Privacy policy</li>
    </ul> 
</div>
<div className='footer-content-right'>
<h3>GET IN TOUCH</h3>
<ul>
    <li>+911234567890</li>
    <li>contact@frution.com</li>
 </ul> 
</div>
        </div>
        <hr/>
<p className='footer-copyright'>Copyright © Frution.com - All rights reserved.</p>
    </div>
  )
}
