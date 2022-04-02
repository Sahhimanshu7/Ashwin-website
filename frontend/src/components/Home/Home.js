import React from 'react'
import styled from 'styled-components';
import MainContent from './MainContent';
import SecondPage from './SecondPage';

function Home() {
  return (
   <Main>
       <MainContent />
       <SecondPage />
   </Main> 
  )
}

export default Home

const Main = styled.div`
   
`;