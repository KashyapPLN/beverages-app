import React from 'react';
import './landing.css';
import fruitsbg from './assets/fruits-bg.mp4';
import logo from './assets/logo.png'
import { FaLocationDot } from 'react-icons/fa6';
import { CiSearch } from 'react-icons/ci';

export default function Landing() {
  return (
    <div className="landing-container">
      {/* Video background */}
      <video className="video-background" autoPlay loop muted>
        <source src={fruitsbg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

        {/* Navbar */}
        <div className="navbar-overlay">
        <ul className="navbar mt-4 me-4">
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>

      {/* Overlay content */}
      <div className="content-overlay">
        <img className='logo-landing' src={logo}/>
        <h1>Frution</h1>
        <p>Indulge in the taste of pure, natural goodness delivered right to your home.</p>
        <div className='location-search-div'>
          <div className='location-div'>
          <span className='location-icon'><FaLocationDot /></span>
          <select className='location-dropdown'>
              <option value="">Select Location</option>
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
              <option value="city3">City 3</option>
            </select>
            <span className='vertical-line'></span>
                    </div>
          <span className='search-icon'><CiSearch /></span>
        <input classNmae='landing-search-input' type='text'/>
        </div>
       
        <button className='ordernow-btn'>Order now</button>
      </div>
    </div>
  );
}

