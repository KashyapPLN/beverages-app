import React from 'react';
import './navbar.css';
import logo from '../assets/logo.png'
import { Button } from 'react-bootstrap';
import { IoCartOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';

export default function NavBar() {
  return (
    <div className='navbar'>
<div className='navbar-logo'>
  <img src={logo} alt='logo' className='logo'/>
  <p>Frution</p>
</div>
<div className='navbar-buttons'>
<Button className='navbar-icon-button'variant='text'><CiSearch /></Button>
<Button className='navbar-icon-button'variant='text'><IoCartOutline /></Button>
<button className='login'>login</button>
</div>
    </div>
  )
}
