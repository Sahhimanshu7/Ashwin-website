import React from 'react'
import styled from 'styled-components'
import EmailForm from './EmailForm';
import Links from './Links';
import img1 from '../../Images/HomePage/Photos 1-01.png'
import img2 from '../../Images/HomePage/Photos 1-02.png'
import img3 from '../../Images/HomePage/Photos 1-03.png'

function SecondPage() {
  return (
    <Main>
        <EmailForm />
        <LinkContainer>
            <Links img={img1} text="INTRUMENTS"/>
            <Links img={img2} text="MERCHANDISE"/>
            <Links img={img3} text="SINGLE AND ALBUMS"/>
        </LinkContainer>
        
    </Main>
  )
}

export default SecondPage

const Main = styled.div`
`;

const LinkContainer = styled.div`
    display:flex;
    justify-content:space-between;
    margin:40px;

    margin-top: 10%;
`;