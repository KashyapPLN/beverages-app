import React, { useState } from 'react';
import './navbar.css';
import logo from '../assets/logo.png'
import { Button, Form, Modal } from 'react-bootstrap';
import { IoCartOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import Login from './login/Login';
import Signup from './login/Signup';


export default function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true);setLogin(true)};
  const [login,setLogin]=useState(true);
  return (
    <div className='navbar'>
<div className='navbar-logo'>
  <img src={logo} alt='logo' className='logo'/>
  <p>Frution</p>
</div>
<div className='navbar-buttons'>
<Button className='navbar-icon-button'variant='text'><CiSearch /></Button>
<Button className='navbar-icon-button'variant='text'><IoCartOutline /></Button>
<button className='login' onClick={handleShow}>login</button>
</div>
<Modal className='login-modal'show={show} onHide={handleClose} centered>
  <Modal.Header className='login-modal-header' closeButton>
    <Modal.Title>{login ? 'Login':'Create Account'}</Modal.Title>
  </Modal.Header>
  {login? <Login setLogin={setLogin} handleClose={handleClose}/>
  :<Signup setLogin={setLogin} handleClose={handleClose}/>
  }
</Modal>
    </div>
  )
}
