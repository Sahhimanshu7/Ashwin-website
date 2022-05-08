import axios from 'axios';
import React from 'react'
import styled from 'styled-components';


function BlogsDisplay() {
    const url = window.location.pathname;
    let i = 2;
    const [blogs, setBlogs] = React.useState([]);
    const id = url.split('/').pop();

   

    axios.get(`/newBlog/searchid/${id}`)
    .then(res => {
        
        setBlogs(res.data);
    }
    ).catch(err => {
        console.log(err);
    }
    );
    
  return (
    <BlogsDisplayContainer>
    <BlogImageContainer>
      {blogs.map(blog => {
        return <img src={`http://localhost:5000/images/${blog.imageId}`} alt=""/>
      }
      )}
        
    </BlogImageContainer>
    <BlogContentContainer>
      <LeftScreenSide>
      {blogs.map(blog => {
        const paragraph = JSON.parse(blog.paragraph);
        
        
        return <div>
          
          <H2>{blog.title}</H2>
          <H3>{blog.writerName}</H3>
          {paragraph.map(p => {
            if (i % 2 === 0) {
              i++;
              return <Header>{p}</Header>
            } else {
              i++;
              return <Paragraph>{p}</Paragraph>
            }
                        
          }
          )}
        </div>
      }
      )}
      </LeftScreenSide>
      <RightScreenSide>
        <TagsContainer>
       {blogs.map(blog => {
         const tags = blog.tags.split(',');
          return <div>
            <H1>Tags</H1>
            <TagsTags>
            {tags.map(tag => {
              return <Tags>
                <Tag>{tag}</Tag>
              </Tags>
       }
        )}
        </TagsTags>
        </div>
      }
      )}
      </TagsContainer>
      <CatagoriesContainer>
      {blogs.map(blog => {
        const catagories = blog.catagories.split(',');
        return <div>
          <H1>Catagories</H1>
          <TagsTags>
          {catagories.map(catagory => {
            return <Tags>
              <Tag>{catagory}</Tag>
            </Tags>
          }
          )}
          </TagsTags>
        </div>

      }
      )}
      </CatagoriesContainer>
      </RightScreenSide>
    </BlogContentContainer>
    
    </BlogsDisplayContainer>
  )
}

export default BlogsDisplay

const BlogContentContainer = styled.div`
  display: flex;
  justify-content: center;

`;
const RightScreenSide = styled.div`
  
`;
const LeftScreenSide = styled.div`
width: 50%;
padding-right:120px;
`;
const BlogsDisplayContainer = styled.div`
display:flex;
flex-direction:column;

`;
const BlogImageContainer = styled.div`
    
    width:80%;
    height:70vh;
    border:2px solid #F37527;
    margin-left:10%;
    img{
      width:100%;
      height:70vh;
  }
    
`;
const Paragraph = styled.p`
  font-size:15px;
  color:#0C3A52;
  font-weight:700;
  margin-bottom:10px;
  padding:10px 0px;

`;
const Header = styled.h1`
  font-size:20px;
  font-weight:700;
  color:#F37527;
  margin-bottom:10px;
  padding:10px 0px;

`;

const TagsContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top:20px;
  margin-left:10%;
  width:120%;
  height:auto;
  padding:10px;
  background-color:#0C3A52;
`;
const CatagoriesContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-left:10%;
  width:120%;
  height:auto;
  padding:10px;
  background-color:#0C3A52;
`;
const Tags = styled.div`
  margin:5px;


`;
const Tag = styled.div`
  align-self:flex-start;
  color:white;
  
`;
const H1 = styled.h1`
color:#F37527;
font-size:30px;
font-weight:700;
margin-bottom:20px;
align-self:center;
  `;

const TagsTags = styled.div`
  border:0.5px solid white;
  padding:10px;
  width:100%;  
`;  

const H2 = styled.h2`
  color:#F37527;
  font-size:40px;
  font-weight:700;
  margin-bottom:20px;
  align-self:center;
  `;
const H3 = styled.h3`
  color:#0C3A52;
  font-size:30px;
  font-weight:700;
  margin-bottom:20px;
  align-self:center;

`;