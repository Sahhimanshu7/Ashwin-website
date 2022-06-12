import React from 'react'
import styled from 'styled-components'
import Logo from '../../Images/Horizontal Logo-01.png'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



import {
   NavLink
  } from "react-router-dom";
// import { style } from '@mui/system';




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

  
  const [open, setOpen] = React.useState(false);
  // const profileImage = localStorage.getItem('profileImage');

  

  
  return (
 <>
    <Main>
    <Image>
        <img src={Logo} alt="Logo" />
    </Image>

    
    <RightMenu>
    <MenuButton>
      {open ? <CloseIcon onClick={() => setOpen(false)} /> : <MenuIcon onClick={() => setOpen(true)} />}
      
            </MenuButton>
            

               
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
            {/* <NavLink to={'/music'} 
            style={({ isActive }) => ({
                color: isActive ?  '#F37527': '#0C3A52',
              })}
            >Music world</NavLink> */}
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

    
    <Image2>
    <img src={Logo} alt="Logo" />
    </Image2>
    
    <Auth>
      <NavLink to={'/login'}
      style={({color:'#F37527'})}>
        <ProfileImage />
        {/* <AccountCircleOutlinedIcon /> */}
      </NavLink>
    </Auth>
    </RightMenu>
    </Main>
    {open && (
      <MobOptions>
        <NavLink to={`/`}
            style={({ isActive }) => ({
                color: isActive ?  '#F37527': 'white',
              })}
              onClick={() => setOpen(false)}
            >Home</NavLink>
            <NavLink to={`/about`} 
            style={({ isActive }) => ({
                color: isActive ?  '#F37527': 'white',
              })}
              onClick={() => setOpen(false)}
            >About us</NavLink> 
            {/* <NavLink to={'/music'} 
            style={({ isActive }) => ({
                color: isActive ?  '#F37527': 'white',
              })}
              onClick={() => setOpen(false)}
            >Music world</NavLink> */}
            <NavLink to={'/blogs'} 
            style={({ isActive }) => ({
                color: isActive ?  '#F37527': 'white',
              })}
              onClick={() => setOpen(false)}
            >Blogs</NavLink>
            <NavLink to={'/contact'} 
            style={({ isActive }) => ({
                color: isActive ?  '#F37527': 'white',
              })}
              onClick={() => setOpen(false)}
            >Contact</NavLink>    
      </MobOptions>
    )}
    </>
  )
}

export default Navbar

const Image = styled.div`
    img{
        width:150px;
        height:60px;
        padding:10px;
    }

    @media (max-width: 768px) {
      display:none;
    }
`;
const Image2 = styled.div`
    img{
        width:150px;
        height:60px;
        padding:10px;
    }

   @media (min-width: 768px) {
      display:none;
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

    @media (max-width: 768px) {
      margin:2px;
      display:flex;
      flex-direction:column;
      padding:5px 5px;
      align-items:strech;
      margin:10px;
    }
    
    
`;

const Options = styled.div`
    align-items:center;
    a{
        padding:20px;
        text-decoration:none;
        color:#0C3A52;
        font-weight:700;
    }

   @media (max-width: 768px) {
      display:none;
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
      border:1px solid #F37527;
      background-color:white;

    }
`;

const MenuButton = styled.button`
    background-color:transparent;
    border:none;
    outline:none;
    cursor:pointer;
    padding:0px;
    margin:0px;
    display:none;
    // display:flex;
    MenuIcon{
      color:#F37527;
      font-size:30px;
      padding:10px;
      
      display:none;
  }

  CloseIcon{
    display:none;
  }

  @media (max-width: 768px) {
    display:block;

  }
`;



const MobOptions = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  height:100vh;
  position:absolute;
  
  
  background-color:black;
  opacity:0.9;
  align-items:center;
  
    a{
        padding:20px;
        text-decoration:none;
        font-weight:700;
        
    }
 
`;


