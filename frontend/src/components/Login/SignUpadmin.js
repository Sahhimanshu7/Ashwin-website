import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function SignUpadmin() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const [username,password] = e.target;
        
        console.log(username.value,password.value);

        

        axios.post('/adminLogin/find',{
            username: username.value,
            password: password.value
        }).then(res => {
            console.log(res.data);
            if(res.data === 'Admin Login Successful!'){
                localStorage.setItem('admin',true);
                window.location.href = '/Admin/AdminPage';
            }
        }).catch(err => {
            console.log(err);
        });
    }
  return (
    <>
    <Form>
        <h1>Admin Login</h1>
        <form method='POST' onSubmit={handleSubmit}>
            <div className='signin-name'>
                <div className='name-input'>
                    <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
            </div>
            <div className='signin-password'>
                <div className='password-input'>
                    <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div className='signin-button'>
                <input className="button" type="submit" value="LOG IN" onKeyPress={(e) => e.key === 'Enter' && handleEnter()} />
            </div>
            
        </form>
    </Form>
    </>
  )
}


export default SignUpadmin

const Form = styled.div`
`;