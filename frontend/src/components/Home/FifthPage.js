import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import img1 from '../../Images/Multi Tunes Photos_Sliders/1.png'
import img2 from '../../Images/Multi Tunes Photos_Sliders/2.png'
import img3 from '../../Images/Multi Tunes Photos_Sliders/3.png'
import styled from 'styled-components'

function FifthPage() {
    const images = [
        img1 ,
        img2 ,
        img3 ,
     ];
  return (
    <Main>
        <Header>
            <HeaderText>
                Classes
            </HeaderText>
            <HeaderSubText>
                Learn Different Instruments
            </HeaderSubText>
        </Header> 
        <Content>
            <LeftScreen>
                <Slider>
                    <SimpleImageSlider
                    width={620}
                    height={410}
                    images={images}
                    
                    showNavs={true}
                    autoPlay={true}
                    autoPlayTime={1500}
                    />
                </Slider>
            </LeftScreen>
            <RightScreen>
                <Text>
                    <div className='first-line'>
                    We Provide Classes of Different Instruments 
                    </div>
                    <div className='second-line'>
                    All Over Nepal.
                    </div>
                    <div className='third-line'>
                    You Can Learn Guitar, Bass, Drums, 
                    </div>
                    <div className='fourth-line'> 
                Music Producing and Many More Instruments 
                </div>
                <div className='fifth-line'>
                and Technical Classes From Experts.
                </div>
                </Text>
                <Button>
                    EXPLORE
                </Button>
            </RightScreen>
        </Content>
        
    </Main>
    

    
  )
}

export default FifthPage

const Main = styled.div`
    padding:20px 40px;
    height:100%;
    background-color: #0C3A52;

    padding:5% 0% 10% 0%;
`;

const Header = styled.div`
    display:flex;
    flex-direction:column;

    padding: 60px 0px;
    line-height: 0.1;
`;

const HeaderText = styled.h1`
    font-size:40px;
    font-weight:900;
    color: #F37527;
    align-self:center;
`;

const HeaderSubText = styled.h3`
    align-self:center;
    font-size:40px;
    font-weight:700;
    color: #FFFFFF;
`;

const Content = styled.div`
    display:flex;
    justify-content:space-between;
`;

const LeftScreen = styled.div`

margin-left:40px;
    
`;

const Slider = styled.div`
    border:2px solid #F37527;
    border-radius:10px;
    padding:3px;
    background-color:#F37527;
    width:620px;
`;

const RightScreen = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
`;

const Text = styled.h3`
    font-size:25px;
    color: #FFFFFF;
    font-weight:700;
    margin-right:40px;

    display:flex;
    flex-direction:column;
    .first-line{
        align-self: flex-end;
    }
    .second-line{
        align-self: flex-end;
    }
    .third-line{
        align-self: flex-end;
    }
    .fourth-line{
        align-self: flex-end;
    }
    .fifth-line{
        align-self: flex-end;
    }
`;

const Button = styled.button`
    border:1px solid #F37527;
    border-radius:10px;
    padding:10px 15px;
    color:#FFFFFF;
    background-color:#F37527;

    margin-top:40px;
    margin-right:40px;
    text-transform:uppercase;
    font-weight:700;
    font-size:15px;

    align-self: flex-end;
`;