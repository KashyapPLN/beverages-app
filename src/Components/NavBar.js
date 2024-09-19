import React, { useEffect, useState } from 'react';
import './navbar.css';
import logo from '../assets/logo.png'
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { IoCartOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import Login from './login/Login';
import Signup from './login/Signup';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { setCredentials,clearCredentials } from '../features/auth/authSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  
  const [show, setShow] = useState(false);
const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.auth.user);
  const handleShow = () => {setShow(true);setLogin(true)};

  useEffect(()=>{
    if(isAuthenticated){
      dispatch(setCredentials({ user: user }));
      console.log('user is',user);
    }
  },[isAuthenticated])

  const handleLogin = () => {
    loginWithRedirect();
      };
  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    dispatch(clearCredentials());
  };
  const [login,setLogin]=useState(true);
  return (
    <div className='navbar'>
<div className='navbar-logo'>
  <img src={logo} alt='logo' className='logo' onClick={()=>navigate('/')}/>
  <p onClick={()=>navigate('/')}>Frution</p>
</div>
<div className='navbar-buttons'>
<Button className='navbar-icon-button'variant='text'><CiSearch /></Button>
<Button className='navbar-icon-button'variant='text'><IoCartOutline /></Button>
{!isAuthenticated ? <button className='login' onClick={handleLogin}>login</button> : 
<Dropdown>
      <Dropdown.Toggle variant="text">
     {userProfile&&userProfile.nickname}
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item onClick={(e)=>navigate('/profile')}>Profile</Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>logout</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
}
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
