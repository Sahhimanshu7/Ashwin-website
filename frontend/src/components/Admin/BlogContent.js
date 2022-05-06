import React,{useState,useEffect} from 'react'
import styled from 'styled-components';

import Paragraph from './Paragraph';
import Tags from './Tags';
import Catagories from './Catagories';
import axios from 'axios';
import BlogImageContainer from './BlogImageContainer';




function BlogContent() { 

    const handleSubmit = (e) => {
        e.preventDefault();
        const [title,description,tags] = e.target;
        
        console.log(description.value);
        
        console.log(tags.value);
        
        console.log(localStorage.getItem('tags'));
        console.log(localStorage.getItem('paragraphs'));
        console.log(localStorage.getItem('catagories'));
        console.log(JSON.parse(localStorage.getItem('paragraphs')));

        axios.post('/newBlog/addNewBlog',{
            title: title.value,
            writerName: description.value,
            paragraph: (localStorage.getItem('paragraphs')),
            catagories: (localStorage.getItem('catagories')),
            tags: (localStorage.getItem('tags')),
            imageId: (localStorage.getItem('imageId'))
        }).then(res => {
            console.log(res.data);
            if(res.data === 'Blog Added Successfully!'){
                localStorage.removeItem('tags');
                localStorage.removeItem('paragraphs');
                localStorage.removeItem('catagories');
                localStorage.removeItem('selectedImage');
                localStorage.removeItem('imageId');
            }
        }).catch(err => {
            console.log(err);
        });

       
        
    }

  return (
    <BlogContainer>
        <BlogImageContainer />
        <form method='POST' onSubmit={handleSubmit}>    
      <BlogTextContainer>
          <BlogTitle>
            <input type="text" placeholder="Title"  /> 
          </BlogTitle>
          <WriterName>
            <input type="text" placeholder="Writer Name" name='writerName' />
          </WriterName>
          <BlogText>
              <div className='paragraph'>
             
                    <Paragraph />
            
                
               </div>
               <div className='right-side'>
               <Tags />
               <Catagories />
                </div>
                
              
          </BlogText>
            <BlogButton>
                <input type="submit" value="Publish" />
            </BlogButton>
      </BlogTextContainer>
      </form>
    </BlogContainer>
  )
}

export default BlogContent

const BlogContainer = styled.div`
    form{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    }


`;




const BlogTextContainer = styled.div`
    width:80%;
`;

const BlogTitle = styled.div`
    
    margin-top:40px;
    input{
        width:100%;
        height:40px;
        border:none;
        
        color:#F37527;
        font-size:20px;
        font-weight:bold;


    }
    input:focus{
        outline:none;
    }
`;

const WriterName = styled.div`
    
    margin-top:10px;
    input{
        width:100%;
        height:20px;
        border:none;
        color:#0C3A52;
        font-size:15px;
        font-weight:bold;
    }
    input:focus{
        outline:none;
    }
`;

const BlogText = styled.div`

    display:flex;
    margin-top:30px;
    justify-content:space-between;
    width:;

    .paragraph{
        width:100%;
        align-self:flex-start;
    }

   
    

`;
const BlogButton = styled.div`
    input{
        background-color: #F37527;
        border:1px solid #F37527;
        border-radius:10px;
        color:white;
        font-size:15px;
        padding:6px 30px;
        margin-top:10px;
        cursor:pointer;
        align-self:flex-end;
        margin-right:10px;
        margin-bottom:10px;
    }
`;
