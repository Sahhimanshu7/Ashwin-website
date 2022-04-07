import React from 'react'
import { useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const clientId = "480980048147-76u7kljjmrt8qnnr2la4ispp1fsoskii.apps.googleusercontent.com";




function SignUpUser() {
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = async (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
        console.log(res);
        
        const {name, email, imageUrl} = res.profileObj;
        console.log(name, email, imageUrl);

        const response = await fetch('/userSignUp/addUserSignUp',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, imageUrl})
        })
        const data = await response.json();
        if(data === 'User added!'){
            alert("Thank you for Contacting Us!");
        }else{
            alert("Error!");
        }
    }

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };
    const responseFacebook =  async (responseFacebook) => {
        console.log(responseFacebook);
        console.log('Login Success:', responseFacebook.name);
        
        const {name, email, picture} = responseFacebook;
        console.log(name, email, picture);
    
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
        }else{
            alert("Error!");
        }
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
            <FacebookLogin
            appId="502334878106369"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="my-facebook-button-class"
            icon="fa-facebook"
        />
              
        </div>
    );
}

export default SignUpUser