import React from 'react'
import styled from 'styled-components'

import {
    Link
  } from "react-router-dom";
import About from '../About/About';

function Navbar() {
  return (
    <Main>
    <Image>
        <img src='#'></img>
    </Image>
    <Options>
            <Link to={`/`}>Home</Link>
            <Link to={`/about`}>About us</Link> 
            <Link to={'/music'}>Music world</Link>
            <Link to={'/blogs'}>Blogs</Link>
            <Link to={'/contact'}>Contact</Link>     
    </Options>
    <Auth>
        <img src='#'></img>
    </Auth>
    </Main>
  )
}

export default Navbar

const Image = styled.div`
`;

const Main = styled.div`
`;

const Options = styled.div`
`;

const Auth = styled.div`
`;