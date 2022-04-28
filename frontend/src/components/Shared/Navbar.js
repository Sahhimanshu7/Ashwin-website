import React, { Profiler } from 'react'
import styled from 'styled-components'
import Logo from '../../Images/Horizontal Logo-01.png'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';



import {
   NavLink
  } from "react-router-dom";


function ProfileImage(){
  if(localStorage.getItem('profileImage') === null){
    return(
      <AccountCircleOutlinedIcon />
    )
  }else{
    
  return(
    <ProfileImageDiv>
    <img src={localStorage.getItem('profileImage')}/>
    </ProfileImageDiv>
  )
  }
}
function Navbar() {

  

  const profileImage = localStorage.getItem('profileImage');

  
  return (
    <Main>
    <Image>
        <img src={Logo} alt="Logo" />
    </Image>
    <RightMenu>
    <Options>
            <NavLink to={`/`}
            style={({ isActive }) => ({
                color: isActive ?  '#F37527': '#0C3A52',
              })}
            >Home</NavLink>
            <NavLink to={`/about`} 
            style={({ isActive }) => ({
                color: isActive ?  '#F37527': '#0C3A52',
              })}
            >About us</NavLink> 
            <NavLink to={'/music'} 
            style={({ isActive }) => ({
                color: isActive ?  '#F37527': '#0C3A52',
              })}
            >Music world</NavLink>
            <NavLink to={'/blogs'} 
            style={({ isActive }) => ({
                color: isActive ?  '#F37527': '#0C3A52',
              })}
            >Blogs</NavLink>
            <NavLink to={'/contact'} 
            style={({ isActive }) => ({
                color: isActive ?  '#F37527': '#0C3A52',
              })}
            >Contact</NavLink>     
    </Options>
    <Auth>
      <NavLink to={'/login'}
      style={({color:'#F37527'})}>
        <ProfileImage />
        {/* <AccountCircleOutlinedIcon /> */}
      </NavLink>
    </Auth>
    </RightMenu>
    </Main>
  )
}

export default Navbar

const Image = styled.div`
    img{
        width:150px;
        height:60px;
        padding:10px;
    }
`;

const Main = styled.div`
    margin:40px;
    border-radius:15px;

    display:flex;
    justify-content:space-between;
    border:1px solid white;
    box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
    
    background-color:white;
    z-index:101;
    
    
`;

const Options = styled.div`
    align-items:center;
    a{
        padding:20px;
        text-decoration:none;
        color:#0C3A52;
        font-weight:700;
    }
`;

const Auth = styled.div`
        padding:20px 10px;
        color:#F37527;
  
`;

const RightMenu = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;

    text-transform:uppercase;
`;

const ProfileImageDiv = styled.div`
    img{
      width:40px;
      height:100%;
      border-radius:50%;
      background-color:white;

    }
`;

