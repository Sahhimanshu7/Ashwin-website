import React from 'react'
import styled from 'styled-components';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
import axios from 'axios';

function BlogImageCointainer() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('file/upload', {
            image: selectedImage
            }).then(res => {
                console.log(res.data);
            }).catch(err => {
                console.log(err);
            });
    }
    
  return (
    <BlogImageCointainerDiv>
        <form onSubmit={handleSubmit}>
        <button type='submit'>Submit</button>
        
        {selectedImage && (
            <Image>
            <img alt="not fount" src={URL.createObjectURL(selectedImage)} />
            <br />
            <button onClick={()=>setSelectedImage(null)}><ClearIcon /></button>
            </Image>
        )}
        <br />
        
        <br /> 
        
        {!selectedImage && (
        <AddImage>
        <label htmlFor="myImage" style={{ 
            background:"#F37527", 
            padding:"8px 12px",
            borderRadius:"5px",
            margin:"10px",
            color:"white",
            fontWeight:"bold",
            fontSize:"15px"
             }}>
         Add Photo
        </label>
        <input
            accept=".png, .jpg, .jpeg"
            type="file"
            name="myImage"
            id='myImage'
            style={({ visibility: 'hidden' })}
            onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
            }}
        />
       
        
        </AddImage>

       
        )}
        
         
        </form>

  
     </BlogImageCointainerDiv>
  )
}

export default BlogImageCointainer

const BlogImageCointainerDiv = styled.div`
    
    width:80%;
    height:70vh;
    border:2px solid #F37527;
    margin-left:10%;
    
`;

const Image = styled.div`
    
    button{
        position:absolute;
        top:180px;
        left:160px;
        background-color:#F37527;
        border:none;
        color:white;
        font-size:5px;
    }
    
    img{
        width:100%;
        height:70vh;
    }
`;

const AddImage = styled.div`
    position:absolute;
    top:180px;
`;