import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Links({img, text}) {
  return (
    <Main>
        <ImageContainer>
            <img src={img} alt=""/>
        </ImageContainer>
        <TextContainer>
            <h1>{text}</h1>
            <Link to={`/music`}>
                <button type="button">Shop</button>
            </Link>
        </TextContainer>
        
    </Main>
  )
}

export default Links

const Main = styled.div`
    display: flex;
    flex-direction: column;
`;

const ImageContainer = styled.div`
    width: 100%;
    border-radius:15px;

    display:flex;
    justify-content:space-between;
    border:1px solid white;
    box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;

    img{
        width:250px;
        height:260px;
        padding:20px 50px;
    }
`;

const TextContainer = styled.div`
    text-align:center;
    h1{
        font-size:20px;
        font-weight:700;
        color:#0C3A52;
    }
    button{
        border: 1px solid #F37527;
        color: #FFFFFF;
        border-radius: 10px;
        background-color: #F37527;
        padding:10px 40px;
        cursor: pointer;
        box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
    }
`;
