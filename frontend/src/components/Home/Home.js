import React from 'react'
import styled from 'styled-components';
import MainContent from './MainContent';

function Home() {
  return (
   <Main>
       <MainContent />
   </Main> 
  )
}

export default Home

const Main = styled.div`
    color:red;
    `;