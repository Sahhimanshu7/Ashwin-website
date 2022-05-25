import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Links({img, text, button, inputColor, linkofBlog}) {
  return (
    <Main>
       
            <img src={img} alt=""/>
       
        <TextContainer inputColor={inputColor}>
            <h1>{text}</h1>
            <Link to={`${linkofBlog}`}>
                <button type="button" >{button}</button>
            </Link>
        </TextContainer>
        
    </Main>
  )
}

export default Links

const Main = styled.div`
    display: flex;
    flex-direction: column;
    img{
    width: 100%;
    border-radius:15px;

    display:flex;
    justify-content:space-between;
    border:1px solid white;
    box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;

    
        width:250px;
        height:260px;
        padding:20px 50px;
    }
    @media (max-width: 768px) {
        margin:10px;
    }
`;


const TextContainer = styled.div`
    margin-top:20px;
    text-align:center;
    h1{
        font-size:20px;
        font-weight:700;
        color:${props => props.inputColor || '#0C3A52'};
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
