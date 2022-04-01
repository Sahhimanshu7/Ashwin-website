import React from 'react'
import styled from 'styled-components'
import Logo from '../../Images/Horizontal Logo-01.png'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import {
    Link
  } from "react-router-dom";

function Navbar() {
  return (
    <Main>
    <Image>
        <img src={Logo} alt="Logo" />
    </Image>
    <RightMenu>
    <Options>
            <Link to={`/`}>Home</Link>
            <Link to={`/about`}>About us</Link> 
            <Link to={'/music'}>Music world</Link>
            <Link to={'/blogs'}>Blogs</Link>
            <Link to={'/contact'}>Contact</Link>     
    </Options>
    <Auth>
        <AccountCircleOutlinedIcon />
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

