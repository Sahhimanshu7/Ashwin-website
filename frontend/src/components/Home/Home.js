import React from 'react'
import styled from 'styled-components';
import ContactUs from '../Shared/ContactUs';
import Footer from '../Shared/Footer';
import FifthPage from './FifthPage';
import FourthPage from './FourthPage';
import MainContent from './MainContent';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';

function Home() {
  return (
   <Main>
       <MainContent />
       {/* <SecondPage /> */}
       {/* <ThirdPage /> */}
       <FourthPage />
       {/* <FifthPage /> */}
      <ContactUs />
      <Footer />
   </Main> 
  )
}

export default Home

const Main = styled.div`
   
`;