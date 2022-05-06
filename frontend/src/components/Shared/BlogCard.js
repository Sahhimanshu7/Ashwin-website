import React from 'react'
import axios from 'axios';
import styled from 'styled-components';

function BlogCard({blogs}) {
  const title = blogs.title;
  const imageId = blogs.imageId;
  const writerName = blogs.writerName;
    
  return (
    <BlogCardDiv>
        <BlogCardImg>
            <h1>{title}</h1>
            <p>{writerName}</p>
            <img src={`http://localhost:5000/images/${imageId}`} alt=""/>
        </BlogCardImg>
    </BlogCardDiv>
  )
}

export default BlogCard

const BlogCardDiv = styled.div`
`;
const BlogCardImg = styled.div`
`;