import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export default function Signup({setLogin,handleClose}) {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const handleSignUp = () => {
        if(email!==''&& password!==''&& name!=='' && phone!==''){
            const request = {
                email,
                password,
                name,
                phone
            }
            axios.post(`${apiUrl}/user/register`,request,{headers:{
                'Content-Type': 'application/json'}}
            ).then(res=>{console.log(res);handleClose();})
        }      
    }
  return (
    <div><Modal.Body className='login-modal-body'>
    <Form.Control type='text' placeholder='Name' onBlur={(e)=>setName(e.target.value)}/>
    <Form.Control type='text' placeholder='Phone Number'onBlur={(e)=>setPhone(e.target.value)}/>
      <Form.Control type='email' placeholder='Email' onBlur={(e)=>setEmail(e.target.value)}/>
      <Form.Control type='password' placeholder='Password'onBlur={(e)=>setPassword(e.target.value)}/> 
      <p className='login-modal-body-text'>have an account? <Button variant='text' onClick={(e)=>setLogin(true)}>Login</Button></p>    
    </Modal.Body>
    <Modal.Footer className='login-modal-footer'>
    <Button variant='success' onClick={handleSignUp}>Create Account</Button>
    </Modal.Footer>
    </div>
   
  )
}
