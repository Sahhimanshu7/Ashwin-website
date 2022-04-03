import React from 'react'
import styled from 'styled-components';
import FourthPage from './FourthPage';
import MainContent from './MainContent';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';

function Home() {
  return (
   <Main>
       <MainContent />
       <SecondPage />
       <ThirdPage />
       <FourthPage />
   </Main> 
  )
}

export default Home

const Main = styled.div`
   
`;