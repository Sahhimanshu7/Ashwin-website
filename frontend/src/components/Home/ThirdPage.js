import React from 'react'
import styled from 'styled-components'
import Links from './Links';
import img1 from '../../Images/HomePage/Photos 1-04.png'
import img2 from '../../Images/HomePage/Photos 1-05.png'
import img3 from '../../Images/HomePage/Photos 1-06.png'

function ThirdPage() {
  return (
    <Main>
        <Header>
            <HeaderText>
                Artists
            </HeaderText>
            <HeaderSubText>
                Book Your Artists & Studio
            </HeaderSubText>
        </Header>
      <LinkWrapper>
        <Links img={img1} text="Solo Artists & Bands" button="BOOK NOW" inputColor="#FFFFFF"/>
        <Links img={img2} text="Recording Studio" button="BOOK NOW" inputColor="#FFFFFF"/>
        <Links img={img3} text="Session Musicians" button="BOOK NOW" inputColor="#FFFFFF"/>
      </LinkWrapper>
    </Main>
  )
}

export default ThirdPage

const Main = styled.div`
    margin-top:10%;
    padding:20px 40px;
    height:100%;
    background-color:#0C3A52;
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

const LinkWrapper = styled.div`
    display:flex;
    justify-content:space-between;

    img{
        width:350px;
        height:300px;
        padding:0px;
        box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    }

    button{
        box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    }
    
    Links text{
        color: #FFFFFF;
    }

    margin-bottom:60px;
`;