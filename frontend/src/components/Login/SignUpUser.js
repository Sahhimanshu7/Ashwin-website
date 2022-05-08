import React from 'react'
import { useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import styled from 'styled-components';
import swal from 'sweetalert';

const clientId = "480980048147-76u7kljjmrt8qnnr2la4ispp1fsoskii.apps.googleusercontent.com";




function SignUpUser() {
    
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const [showFacebookLogin, setShowFacebookLogin] = useState(true);
    const [showFacebookLogout, setShowFacebookLogout] = useState(false);

    const [reload, setReload] = useState(false);
  

    //Google login handler

    const onLoginSuccess = async (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
        console.log(res);
        
        const {name, email, imageUrl} = res.profileObj;
        console.log(name, email, imageUrl);
        localStorage.setItem('profileImage',imageUrl);
        localStorage.setItem('profileName',name);
        localStorage.setItem('profileEmail',email);
        

        const response = await fetch('/userSignUp/addUserSignUp',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, imageUrl})
        })
        const data = await response.json();
        if(data === 'User added!'){
            
            localStorage.setItem('user',true);
            swal("You have been signed in","success", {
                buttons: {
                  cancel: "Cancel",
                  catch: {
                    text: "Sign in",
                    value: "Reload",
                  },
                  
                },
              })
              .then((value) => {
                switch (value) {
               
                  
               
                  case "Reload":
                    window.location.href='/';
                    break;
               
                  default:
                    swal("Please Reload to continue");
                }
              });
            
            
        }else{
            
            localStorage.setItem('user',true); 
            swal("You have signed up before", {
                buttons: {
                  cancel: "Cancel",
                  catch: {
                    text: "Sign in",
                    value: "Reload",
                  },
                  
                },
              })
              .then((value) => {
                switch (value) {
               
                  
               
                  case "Reload":
                    window.location.href='/';
                    break;
               
                  default:
                    swal("Please Reload to continue");
                }
              });
                   
        }
    }

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        swal("You have been logged out successfully");
        localStorage.removeItem('profileImage');
        localStorage.removeItem('profileName');
        localStorage.removeItem('profileEmail');
        
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
        window.location.href = '/';
        
    };

    //facebook login handler
    const responseFacebook =  async (responseFacebook) => {
        console.log(responseFacebook);
        console.log('Login Success:', responseFacebook.name);

        setShowFacebookLogin(false);
        setShowFacebookLogout(true);
        
        const {name, email, picture} = responseFacebook;
        console.log(name, email, picture);

        localStorage.setItem('profileImage',picture.data.url);
        localStorage.setItem('profileName',name);
        localStorage.setItem('profileEmail',email);

    
        const responseData = await fetch('/userSignUp/addUserSignUp',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, imageUrl: picture.data.url})
        })
        const dataFacebook = await responseData.json();
        if(dataFacebook === 'User added!'){
            alert("User added!");
            localStorage.setItem('user',true);
            localStorage.setItem('facbook',false);
        }else{
            swal("You have been signed up before!");
            localStorage.setItem('user',true);
            localStorage.setItem('facebook',false);
        }
    }
    const FacebookLogout = () => {
        setShowFacebookLogin(true);
        setShowFacebookLogout(false);
        localStorage.removeItem('profileImage');
        localStorage.removeItem('profileName');
        localStorage.removeItem('profileEmail');
        window.location.reload(true);
        localStorage.setItem('facebook',true);
    }



    

    return (
        <Main>
            <h1>Log in</h1>
            <LogIn>
            { showloginButton ?
            
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Log in with Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    autoLoad={false}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                    isSignedIn={false}
                    autoLoad={false}
                >
                </GoogleLogout> : null
            }
            {showFacebookLogin? 
            <FacebookLogin
            appId="502334878106369"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="my-facebook-button-class"
            icon="fa-facebook"
            
        /> : null    
        }
        {localStorage.getItem('facebook') ? 
        <FaceBookLogout>
            <button onClick={FacebookLogout}>Logout From Facebook</button>
        </FaceBookLogout> 
        : null   
    }
            
            </LogIn>
              
        </Main>
    );
}

export default SignUpUser

const FaceBookLogout = styled.div`
button{
background-color: #3b5998;
color: white;
border: none;
padding: 10px;
}
`;
const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    h1{
        font-size: 40px;
        font-weight: 900;
        color: #F37527;
    }
`;

const LogIn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20vh;
    width: 100%;
    .my-facebook-button-class{
        background-color: #3b5998;
        color: white;
        border: none;
        padding: 10px;
    }
`;