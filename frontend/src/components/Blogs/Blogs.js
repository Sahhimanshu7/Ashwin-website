import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import SimpleImageSlider from 'react-simple-image-slider';

import img1 from '../../Images/Multi Tunes Photos_Sliders/1.png'
import img2 from '../../Images/Multi Tunes Photos_Sliders/2.png'
import img3 from '../../Images/Multi Tunes Photos_Sliders/3.png'
import FourthPage from '../Home/FourthPage';
import ContactUs from '../Shared/ContactUs';
import Footer from '../Shared/Footer';

function Blogs() {
  const images = [
    img1 ,
    img2 ,
    img3 ,
 ];
  return (
    <MainContainer>
      <Slider>
      <img src={img1} alt="logo" />
      </Slider>
      <FourthPage />
      <ContactUs />
      <Footer />
    </MainContainer>
  )
}

export default Blogs

const MainContainer = styled.div`
 
  
  
`;

const Slider = styled.div`
   width:300px;
    height:270px;
    margin-left:50px;
    border:2px solid #F37527;
    border-radius:10px;
    padding:0.2px;
    background-color:#F37527;

    margin-bottom:60px;

    @media (max-width: 768px) {
      margin-top:40px;
      margin-bottom:0px;
      img{
          width:300px;
          height:270px;
      }
`;