import React from 'react'
import ContactUs from '../Shared/ContactUs'
import Footer from '../Shared/Footer'
import Map from './Map';
import styled from 'styled-components';


function Contact() {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <>
    <ContactUs />
    <Maps>
    <Map />
    </Maps>
    <Footer />
    </>
  )
}

export default Contact

const Maps = styled.div`
    margin-top:10%;
    margin:20px;
    height:100%;
    position:relative;
    margin-bottom:10%;
    height:60vh;
`;