
import React,{useState} from 'react'
import { SocialIcon } from 'react-social-icons'
import styled from 'styled-components'
import ContactUs from '../Shared/ContactUs'
import Footer from '../Shared/Footer'
import logo from './../../Images/Main Logo-01.png'

import img1 from './../../Images/Services_Production.png'
import img2 from './../../Images/Services_Promotion.png'
import img3 from './../../Images/Services_Record.png'

import img4 from './../../Images/Team/team1.jpg'
import img5 from './../../Images/Team/team2.jpg'


function Hovered(){
  return(
    <div
    style={{backgroundImage:`url(${img4})`,
    backgroundSize:'cover',
     width:"250px",height:"260px"}}>
      <div style={{
        backgroundColor:'rgba(0,0,0,0.5)',
        width:"100%",
        height:"100%",
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <div>
          <SocialIcon url="https://www.facebook.com/profile.php?id=100007884548277" style={{width:'50px',height:'50px',margin:'10px'}} fgColor="white" bgColor='#0C3A52'/>
          <SocialIcon url='https://www.instagram.com/ravipandey321/' style={{width:'50px',height:'50px',margin:'10px'}} fgColor="white" bgColor='#0C3A52'/>
        </div>
      </div>

    </div>
  )
}
function Hovered2(){
  return(
    <div
    style={{backgroundImage:`url(${img5})`,
    backgroundSize:'cover',
     width:"250px",height:"260px"}}>
      <div style={{
        backgroundColor:'rgba(0,0,0,0.5)',
        width:"100%",
        height:"100%",
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      }}>
        <div>
          <SocialIcon url="https://www.facebook.com/pandeyas8848" style={{width:'50px',height:'50px',margin:'10px'}} fgColor="white" bgColor='#0C3A52'/>
          <SocialIcon url='https://www.instagram.com/ashwinonstrings/?igshid=YmMyMTA2M2Y=' style={{width:'50px',height:'50px',margin:'10px'}} fgColor="white" bgColor='#0C3A52'/>
        </div>
      </div>

    </div>
  )
}
function UnHovered(){
  return(
    <div
    style={{}}>
      <img src={img4} alt=""/>
    </div>
  )
}
function UnHovered2(){
  return(
    <div
    style={{}}>
      <img src={img5} alt=""/>
    </div>
  )
}


function About() {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
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
    <OurServices>

        <Header>
            <HeaderText>
               Our Services
            </HeaderText>
            <HeaderSubText>
                We provide Studio - Promotion
            </HeaderSubText>
        </Header>
        <TextContainers>
            <ImagesWrapper>
              <img src={img3} alt="Logo" />
              
              <TextContainer>
                <h1>Recording Label</h1>
                <Text2>
                  We record music of artists and help it to be more musical and creative to audience.
                </Text2>
              </TextContainer>
            </ImagesWrapper>
            <ImagesWrapper>
              <img src={img1} alt="Logo" />
              <TextContainer>
                <h1>Video Production</h1>
                <Text2>
                We make creative and quality videos of the music to engage audiences to it.
                </Text2>
              </TextContainer>
            </ImagesWrapper>
            <ImagesWrapper>
              <img src={img2} alt="Logo" />
              <TextContainer>
                <h1>Distribution</h1>
                <Text2>
                  We distribute music to the audience and help the artists to get engaged.
                </Text2>
              </TextContainer>
            </ImagesWrapper>
            </TextContainers>
        
    </OurServices>
   
    <Team>
      <Head2>
        <h1>Team</h1>
        <p>World's best team</p>
      </Head2>
      <TeamContainer>
        <TeamMember
        onMouseEnter={() => {
          setVisible1(true)
        }
        }
        onMouseLeave={() => {
          setVisible1(false)
        }
      }
        >
          <Social>
          {visible1 ? <Hovered />: <UnHovered />}
          
          </Social>
          
          </TeamMember>
          <TeamMember
        onMouseEnter={() => {
          setVisible2(true)
        }
        }
        onMouseLeave={() => {
          setVisible2(false)
        }
      }
        >
          <Social>
          {visible2 ? <Hovered2 />: <UnHovered2 />}
          
          </Social>
          
          </TeamMember>
          
        </TeamContainer>
    </Team>
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

  @media (max-width: 768px) {
    flex-direction: column;
    
  }
`;

const Logo = styled.div`
    margin-left:40px;
    margin-right:40px;
    margin-top:40px;
    margin-bottom:40px;

    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;


    img{
        width:80%;
        height:100%;
    }

    @media (max-width: 768px) {
      img{
        width:50%;
        height:70%;
        justify-content:center;
      }
`;

const AboutUs = styled.div`
    width:120%;
    display:flex;
    justify-content:flex-end;
    flex-direction:column;
    align-items:flex-end;

    margin-right:40px;

    @media (max-width: 768px) {
      width:100%;
      padding-left:20px;
      align-items:flex-start;
    }

    
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

    @media (max-width: 768px) {
      padding-left:30px;
      align-items:flex-start;
      p{
        align-self:flex-start;
        font-size:20px;
      }
      h1{
        align-self:flex-start;
        font-size:30px;
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
  align-self:flex-start;
}
.third-line{
  align-self:flex-end;
}
.fourth-line{
  align-self:flex-end;
}

@media (max-width: 768px) {
  font-size:20px;
  padding:20px 30px;
}

`;

const SocialMedia = styled.div`
  align-self:flex-end;
  a{
    border:4px solid #0C3A52;
    border-radius:50%;
    margin:5px;
  }

  @media (max-width: 768px) {
    align-self:flex-start;
    a{
      margin-top:15px;
      border:2px solid #0C3A52;
      font-size:10px;
    }
  }
`;

const OurServices = styled.div`
margin-top:10%;
    padding:20px 40px;
    height:100%;
    background-color:#0C3A52;
`;
const HeaderText = styled.p`
font-size:40px;
    font-weight:900;
    color: #F37527;
    align-self:center;
`;
const HeaderSubText = styled.p`
align-self:center;
    font-size:40px;
    font-weight:700;
    color: #FFFFFF;

    @media (max-width: 768px) {
      font-size:20px;
  }
`;
const Header = styled.div`
display:flex;
    flex-direction:column;

    padding: 60px 0px;
    line-height: 0.1;
`;

const ImagesWrapper = styled.div`
display: flex;
    flex-direction: column;
    img{
    width: 100%;
    border-radius:15px;

    display:flex;
    justify-content:space-between;
    border:1px solid white;
    box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;

    
        width:350px;
        height:260px;
        
    }
`;
const TextContainer = styled.div`
  margin-top:20px;
    text-align:center;
    h1{
        font-size:20px;
        font-weight:700;
        color:#F37527;
        padding-right:60px;
    }

    @media (max-width: 768px) {
      h1{
        padding-right:5px;
      }
    }
`;

const Text2 = styled.p`
    font-size:20px;
    font-weight:700;
    color:white;
    padding-right:60px;

    @media (max-width: 768px) {
      padding-right:5px;
      font-size:15px;
      padding-bottom:10px;
    }


`;

const TextContainers = styled.div`
display:flex;
    justify-content:space-between;

    img{
        width:350px;
        height:260px;
        padding:0px;
        box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    }

   padding-left:40px;

    margin-bottom:60px;

    @media (max-width: 768px) {
        flex-direction:column;
        padding-left:0px;
        img{
            width:300px;
            height:200px;
        }
    }
`;

const Team = styled.div`
  
margin-top:70px;
margin-bottom:70px;
`;
const TeamContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:20px;
    margin-bottom:20px;

    @media (max-width: 768px) {
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }
`;
const TeamMember = styled.div`

width:250px;
height:260px;
padding:20px;
img{
  
  width: 100%;
  border-radius:15px;

  display:flex;
  justify-content:space-between;
  border:1px solid white;
  box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;

  
      width:250px;
      height:260px;
}
img:hover{
  cursor:pointer;
  opacity:0.5;
  z-index:0;
}

`;
const Head2 = styled.div`
display:flex;
    flex-direction:column;
    h1{
        font-size:40px;
        font-weight:900;
        color: #F37527;
        align-self:center;

    }
    p{
        align-self:center;
        font-size:40px;
        font-weight:700;
        color: #0C3A52;
    }

    @media (max-width: 768px) {
      p{
        font-size:20px;
      }
    }
`;
const Social = styled.div`
    
`;