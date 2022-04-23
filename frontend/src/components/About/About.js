import React from 'react'
import { SocialIcon } from 'react-social-icons'
import styled from 'styled-components'
import ContactUs from '../Shared/ContactUs'
import Footer from '../Shared/Footer'
import logo from './../../Images/Main Logo-01.png'

function About() {
  return (
    <div>
    <MainContent>
      <Logo>
          <img src={logo} alt="Logo" />
      </Logo>
      <AboutUs>
        <Head>
        <p>About Us</p>
        <h1>Multi Tunes</h1>
        </Head>
        <Text>
          <div className="first-line">
            We are a record label of Nepal that creates music
          </div>
          <div className="second-line">
            and support every invidual.
          </div>
          <div className='third-line'>
            We provide freedom to every artists to get their musical rights
          </div>
          <div className='fourth-line'>
             from writing to releasing to the audience.
          </div>
          <SocialMedia>
          <SocialIcon url='https://www.facebook.com/multitunesmusic' target='_blank' fgColor='#F37527' bgColor='white'/>
          <SocialIcon url='https://www.instagram.com/multitunesmusic/' target='_blank' fgColor='#F37527' bgColor='white'/>
          <SocialIcon url='https://www.youtube.com/c/multitunesmusic' target='_blank' fgColor='#F37527' bgColor='white'/>
          </SocialMedia>
        </Text>
      </AboutUs>
      
    </MainContent>

    <ContactUs />
    <Footer />
    </div>

    

  )
}

export default About

const MainContent = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
    margin-left:40px;
    margin-right:40px;
    margin-top:40px;
    margin-bottom:40px;

    width:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;


    img{
        width:80%;
        height:100%;
    }

`;

const AboutUs = styled.div`
    width:120%;
    display:flex;
    justify-content:flex-end;
    flex-direction:column;
    align-items:flex-end;

    margin-right:40px;

    
`;

const Head = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    p{
      align-self:flex-end;
      margin-bottom:-20px;
      color:#F37527;
      font-weight:700;
      
    }
    h1{
      align-self:flex-end;
      color:#0C3A52;
      font-size:45px;
      font-weight:900;
    }
`;

const Text = styled.div`

display:flex;
flex-direction:column;

font-size:25px;
color: #0C3A52;

.first-line{
        
  align-self:flex-end;
}
.second-line{
  align-self:flex-end;
}
.third-line{
  align-self:flex-end;
}
.fourth-line{
  align-self:flex-end;
}

`;

const SocialMedia = styled.div`
  align-self:flex-end;
  a{
    border:4px solid #0C3A52;
    border-radius:50%;
    margin:5px;
  }
`;