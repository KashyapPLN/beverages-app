import React, { useState } from 'react';
import './navbar.css';
import logo from '../assets/logo.png'
import { Button, Form, Modal } from 'react-bootstrap';
import { IoCartOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';


export default function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
  {login? <Modal.Body className='login-modal-body'>
    <Form.Control type='email' placeholder='Email'/>
    <Form.Control type='password' placeholder='password'/> 
    <p className='login-modal-body-text'>don't have an account? <Button variant='text' onClick={(e)=>setLogin(false)}>Create Account</Button></p>  
  </Modal.Body>
  :
  <Modal.Body className='login-modal-body'>
  <Form.Control type='text' placeholder='Name'/>
  <Form.Control type='text' placeholder='Phone Number'/>
    <Form.Control type='email' placeholder='Email'/>
    <Form.Control type='password' placeholder='password'/> 
    <p className='login-modal-body-text'>have an account? <Button variant='text' onClick={(e)=>setLogin(true)}>Login</Button></p>    
  </Modal.Body>}
  <Modal.Footer className='login-modal-footer'>
  {login?  <Button variant='primary'>Login</Button> :<Button variant='success'>Create Account</Button> } 
  </Modal.Footer>
</Modal>
    </div>
  )
}
