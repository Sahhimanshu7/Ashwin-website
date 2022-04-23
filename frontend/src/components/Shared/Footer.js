import React from 'react'
import {SocialIcon} from 'react-social-icons';
import styled from 'styled-components';

function Footer() {
  return (
    <Main>
        <Icons>
        <SocialIcon url='https://www.facebook.com/multitunesmusic' target='_blank' fgColor='#F37527' bgColor='#0C3A52'/>
        <SocialIcon url='https://www.instagram.com/multitunesmusic/' target='_blank' fgColor='#F37527' bgColor='#0C3A52'/>
        <SocialIcon url='https://www.youtube.com/c/multitunesmusic' target='_blank' fgColor='#F37527' bgColor='#0C3A52'/>
        <SocialIcon url='https://soundcloud.com/multi-tunes' target='_blank' fgColor='#F37527' bgColor='#0C3A52'/>
        <SocialIcon url='https://twitter.com/TunesMulti' target='_blank' fgColor='#F37527' bgColor='#0C3A52'/>
        
        </Icons>

        <Copyright>
            <Head>
            Copyrights
            </Head>
            
            <SmallLogo>
            &#64; Multi Tunes
            </SmallLogo>
        
                <Date>
            2022
            </Date>
        </Copyright>
    </Main>
  )
}

export default Footer

const Main = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 60px;
    background-color: #0C3A52;
`;

const Icons = styled.div`
    a{
        border: 4px solid white;
        border-radius: 50%;
        margin: 0px 10px;
    }
`;

const Copyright = styled.div`
    color:white;
    font-size:20px;
    font-weight:700;
    padding:20px;
    display:flex;
    
    
    
`;

const SmallLogo = styled.div`
    margin-left:10px;
    color:#F37527
`;

const Date = styled.div`
margin-left:10px;
`;

const Head = styled.div`

`;



