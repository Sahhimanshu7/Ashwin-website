import React from 'react'
import styled from 'styled-components';
import img1 from '../../Images/HomePage/Photos 1-07.png'
import img2 from '../../Images/HomePage/Photos 1-08.png'
import img3 from '../../Images/HomePage/Photos 1-09.png'
import Links from './Links';

function FourthPage() {
  return (
    <Main>
        <Header>
            <HeaderText>
                Our Blogs
            </HeaderText>
            <HeaderSubText>
                Read and Understand
            </HeaderSubText>
        </Header>
      <LinkWrapper>
        <Links img={img1} text="Solo Artists & Bands" button="BOOK NOW" />
        <Links img={img2} text="Recording Studio" button="BOOK NOW" />
        <Links img={img3} text="Session Musicians" button="BOOK NOW" />
      </LinkWrapper>
    </Main>
  )
}

export default FourthPage

const Main = styled.div`
    padding:20px 40px;
    height:100%;
    background-color:white;
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
`;

const LinkWrapper = styled.div`
    display:flex;
    justify-content:space-between;

    margin-bottom:60px;
`;
