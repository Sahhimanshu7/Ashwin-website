import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import styled from 'styled-components'
import img1 from '../../Images/Multi Tunes Photos_Sliders/1.png'
import img2 from '../../Images/Multi Tunes Photos_Sliders/2.png'
import img3 from '../../Images/Multi Tunes Photos_Sliders/3.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function MainContent() {
    const images = [
         img1 ,
         img2 ,
         img3 ,
      ];

            
  return (
      <Main>
    <LeftScreen>
        <LeftScreenHeader>
            Multi Tunes
        </LeftScreenHeader>
        <LeftScreenContent>
            A Musical World of Nepal
        </LeftScreenContent>
        <Button>
            Know More
        </Button>
    </LeftScreen>
    <RightScreen>
        <Slider>
        <SimpleImageSlider
        width={656}
        height={430}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayTime={1500}
      />
      </Slider>
    </RightScreen>
    </Main>
  )
}

export default MainContent

const LeftScreen = styled.div`
    padding:15% 80px;

`;

const LeftScreenHeader = styled.div`
    font-weight:900;
    font-size:60px;
    word-spacing:-0.1em;
    text-transform:uppercase;

    color:#0C3A52;
`;

const LeftScreenContent = styled.div`
    font-weight:600;
    color:#F37527;
    text-transform:uppercase;
`;

const Main = styled.div`
    height:90vh;
    display: flex;
    justify-content: space-between;
`;

const RightScreen = styled.div`
    margin: 40px;
    padding-top:5%;


`;
const Slider = styled.div`
    border:2px solid #F37527;
    border-radius:10px;
    padding:3px;
    background-color:#F37527;
`;

const Button = styled.button`
    border:1px solid #F37527;
    border-radius:10px;
    padding:10px;
    color:#FFFFFF;
    background-color:#F37527;

    margin-top:20px;
    text-transform:uppercase;
    font-weight:700;
    font-size:15px;
`;