import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

export default function Login({setLogin,handleClose}) {

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      }

    const apiUrl = process.env.REACT_APP_API_URL;
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
const handleLogin = ()=>{
    if(email!==''&& password!==''){
        const request = {
            email,
            password
        }
        axios.post(`${apiUrl}/user/login`,request,{headers:{
            'Content-Type': 'application/json'},}
        ).then(res=>{
               const token = getCookie('authToken');
        console.log('Token:', token,res.headers['Set-Cookie']);handleClose();})
    }
   
}
  return (
    <div><Modal.Body className='login-modal-body'>
    <Form.Control type='email' placeholder='Email' onBlur={(e)=>setEmail(e.target.value)}/>
    <Form.Control type='password' placeholder='Password' onBlur={(e)=>setPassword(e.target.value)}/> 
    <p className='login-modal-body-text'>Don't have an account? <Button variant='text' onClick={(e)=>setLogin(false)}>Create Account</Button></p>  
  </Modal.Body>
  <Modal.Footer className='login-modal-footer'>
  <Button variant='primary' onClick={handleLogin}>Login</Button>
  </Modal.Footer>
  </div>
  )
}
