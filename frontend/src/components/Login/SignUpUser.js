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
            alert("User added!");
            localStorage.setItem('user',true);
            
            
        }else{
            swal("You have been signed up before!");
            localStorage.setItem('user',true);
            // window.location.href = '/';
            
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
            alert("Thank you for Contacting Us!");
            
            localStorage.setItem('user',true);
        }else{
            alert("Error!");
            localStorage.setItem('user',true);
        }
    }
    const FacebookLogout = () => {
        setShowFacebookLogin(true);
        setShowFacebookLogout(false);
        localStorage.removeItem('profileImage');
        localStorage.removeItem('profileName');
        localStorage.removeItem('profileEmail');
        window.location.reload(true);
    }



    

    return (
        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
            {showFacebookLogin ? 
            <FacebookLogin
            appId="502334878106369"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="my-facebook-button-class"
            icon="fa-facebook"
        ></FacebookLogin> : null    
        }
        {showFacebookLogout ? 
        <FaceBookLogout>
            <button onClick={FacebookLogout}>Logout</button>
        </FaceBookLogout> 
        : null   
    }
            
        
              
        </div>
    );
}

export default SignUpUser

const FaceBookLogout = styled.div`
`;