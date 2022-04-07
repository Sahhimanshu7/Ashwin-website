import React from 'react'
import {useState} from 'react'
import styled from 'styled-components';

function ContactUs() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [number,setNumber] = useState('');

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const {name,email,number,message} = e.target;
        console.log(name.value,email.value,number.value,message.value);

        const res = await fetch('/userContact/add',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: name.value, email: email.value, number: number.value, message: message.value})
        })
        const data = await res.json();
        if(data === 'User added!'){
            setName('');
            setEmail('');
            alert("Thank you for Contacting Us!");
        }else{
            alert("Error!");
        }
    }

  return (
    <ContactUsContainer>
        <ContactForm>
            <ContactFormHead>
                <h1>Contact Us</h1>
            </ContactFormHead>
            <ContactFormBody>
                <form method='POST' onSubmit={handleSubmit}>
                    <div className='contact-name'>
                        <input type="text" name="name" placeholder="ENTER YOUR FULL NAME" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='contact-email'>
                        <input type="email" name="email" placeholder="ENTER YOUR EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='contact-number'>
                        <input type="number" name="number" placeholder="ENTER YOUR PHONE NUMBER" value={number} onChange={(e) => setNumber(e.target.value)} />
                    </div>
                    <div className='contact-message'>
                        <textarea name="message" placeholder="ENTER YOUR MESSAGE" value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <Button>
                        <input className="button" type="submit" value="SEND" onKeyPress={(e) => e.key === 'Enter' && handleEnter()} />

                    </Button>
                </form>
            </ContactFormBody>
        </ContactForm>
        <RightSide>
            <div className='head'>
                <p>Office</p>
            </div>
            <div className='first-line'>
            Bhanimandal-14, Jawalkhel, Lalitpur
            </div>
            <div className='second-line'>
                <div className='phone'>
                    Phone:
                </div>
                <div className='number'>
                 &nbsp;+977-9815447962
                </div>
            </div>
            <div className='third-line'>
                <div className='email'>
                    Email:
                </div>
                <div className='email-address'>
                multituneslabel@gmail.com
                </div>
            </div>
        </RightSide>

        
    </ContactUsContainer>
  )
}

export default ContactUs

const ContactUsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    margin: 80px;
`;

const ContactForm = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContactFormHead = styled.div`

    font-size: 20px;
    font-weight: 900;
    color: #F37527;

`;

const ContactFormBody = styled.div`
    form{
        display: flex;
        flex-direction: column;
    }
    .contact-name{
        margin: 20px 0px;
        align-self: flex-start;
    }
    .contact-email{
        margin: 20px 0px;
        align-self: flex-start;
    }
    .contact-number{
        margin: 20px 0px;
        align-self: flex-start;
    }
    .contact-message{
        margin: 20px 0px;
        align-self: flex-start;
    }
    .contact-name input{
        border: 1px solid black;
        padding: 3px;

        width: 150%;
        height: 40px;
        font-size: 20px;
        font-weight: 700;
        color: #0C3A52;
    }
    .contact-email input{
        border: 1px solid black;
        padding: 3px;

        width: 150%;
        height: 40px;
        font-size: 20px;
        font-weight: 700;
        color: #0C3A52;
    }
    .contact-number input{
        border: 1px solid black;
        padding: 3px;

        width: 150%;
        height: 40px;
        font-size: 20px;
        font-weight: 700;
        color: #0C3A52;
    }
    .contact-message textarea{
        border: 1px solid black;
        padding: 3px;

        width: 200%;
        height: 100px;
        font-size: 20px;
        font-weight: 700;
        color: #0C3A52;
    }
`;

const Button = styled.div`
    input{
        border: 1px solid #F37527;
        color: #FFFFFF;
        border-radius: 10px;
        background-color: #F37527;
        padding:10px 40px;
        cursor: pointer;
    }

    align-self: flex-start;
`;

const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 30px;
    font-weight: 700;
    p{
        font-size: 40px;
        padding: 0px;
    }

    .head{
        color: #F37527;
        align-self: flex-end;
    }
    .first-line{
        color: #0C3A52;
        align-self: flex-end;
    }
    .second-line{
        display: flex;
        align-self: flex-end;
        .phone{
            color: #F37527;
        }
        .number{
            color: #0C3A52;
        }
    }
    .third-line{
        display: flex;
        align-self: flex-end;
        .email{
            color: #F37527;
        }
        .email-address{
            color: #0C3A52;
        }
    }

`;

