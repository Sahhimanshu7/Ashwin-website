import React from 'react'
import { useState } from 'react'

import './EmailForm.css';


function EmailForm() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const {name,email} = e.target;

        const res = await fetch('/userEmail/add',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: name.value, email: email.value})
        })
        const data = await res.json();
        if(data === 'User added!'){
            setName('');
            setEmail('');
            alert("Thank you for subscribing!");
        }else{
            alert("Error!");
        }
    }
  return (
    <div className="email-form">
        <div className='email-form-head'>
            <div className='email-form-head-text'>
                <h1>Subscribe</h1>
            </div>
            <p>For Musical Updated</p>
        </div>
        <form method='POST' onSubmit={handleSubmit}>
            <div className='email-name'>
            <input type="text" name="name" placeholder="ENTER YOUR FULL NAME" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='email-email'>
            <input type="email" name="email" placeholder="ENTER YOUR EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="button-container">
                <input className="button" type="submit" value="SEND" onKeyPress={(e) => e.key === 'Enter' && handleEnter()}/>
            </div>
            
        </form>
    </div>
  )
}

export default EmailForm