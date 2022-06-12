import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import ContactUs from '../Shared/ContactUs'
import Footer from '../Shared/Footer'
import SignUpUser from './SignUpUser'

import img1 from '../../Images/Musical Boy-01.png'

function AdminPageLink() {
  if(localStorage.getItem('admin') === 'true'){

  return (
    window.location.href = '/Admin/AdminPage'
  )
  }
}
function Login() {
  return (
      <>
      <Main>
      <RightScreen>
      <AdminPageLink admin='false'/>
      <img src={img1} alt="logo" />

      </RightScreen>
      <LeftScreen>
       <SignUpUser />
      </LeftScreen>
      </Main>
      <ContactUs />
      <Footer />
    </>
  )
}

export default Login

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }

`;
const RightScreen = styled.div`
img{
  width:100%;
  height:70vh;
}
@media (max-width: 768px) {
  img{
    width:100%;
    height:40vh;
  }
}

`;
const LeftScreen = styled.div`
height:70vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

@media (max-width: 768px) {
  height:20vh;
  margin-bottom:40px;
}

`;