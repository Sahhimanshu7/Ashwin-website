import React from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function BlogCard({blogs}) {
  const title = blogs.title;
  const imageId = blogs.imageId;
  const writerName = blogs.writerName;
    
  return (
    <Main>
    <button onClick={() => {
      window.location.href = `/blogs/${blogs._id}`;
    }}>
    <BlogCardDiv>
      
        <BlogCardImg>
            <img src={`http://localhost:5000/images/${imageId}`} alt=""/>
        </BlogCardImg>
        <BlogCardTitle>
            {title}
        </BlogCardTitle>
        
    </BlogCardDiv>
    </button>
    </Main>
  )
}

export default BlogCard

const Main = styled.div`
button{
  background-color: white;
  border: none;
  cursor: pointer;
}
`;

const BlogCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    
    
    border-radius:15px;

    display:flex;
    justify-content:space-between;
    border:1px solid white;
    box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;

    width:360px;
    height:360px;

    padding:10px 10px;
       
        
    
`;
const BlogCardImg = styled.div`
    img{
        padding:0px;
        
        width: 360px;
        height: 100%;
    }
    border:1px solid #F37527;
    
`;
const BlogCardTitle = styled.div`
    font-size:20px;
    font-weight:700;
    color:#0C3A52;
    margin-top:10px;
    margin-bottom:10px;
    text-align:center;

`;
const BlogCardWriter = styled.div`
`;