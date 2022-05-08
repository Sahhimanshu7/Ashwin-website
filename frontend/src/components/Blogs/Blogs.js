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
        <SimpleImageSlider
        width={1310}
        height={600}
        images={images}
        autoPlay={true}
        autoPlayTime={2000}
        showNavs={true}
        navSize={70}
      />
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
    width:91%;
    margin-left:50px;
    border:2px solid #F37527;
    border-radius:10px;
    padding:3px;
    background-color:#F37527;

    margin-bottom:60px;
`;