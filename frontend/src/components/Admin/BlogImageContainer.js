import React from 'react'
import styled from 'styled-components';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
import axios from 'axios';
import LoadingDots from '../../Images/loading-dots.gif';
import swal from 'sweetalert';

function BlogImageCointainer() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [inputContainsFile, setInputContainsFile] = useState(false);
    const [imageID, setImageID] = useState(null);
    const [progress, setProgress] = useState(0);
    const [uploaded, setUploaded] = useState(false);

    const fileUploadHandler = (e) => {
        const fd = new FormData();
        fd.append('image', selectedImage, selectedImage.name);
        axios.post('/images/upload', fd, {
            onUploadProgress: (progressEvent) => {
                setProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));
                console.log('Upload Progress: ' + Math.round((progressEvent.loaded * 100) / progressEvent.total) + '%');
            }
        }).then(res => {
            setImageID(res.data.id);
            console.log(res.data.id);
            setLoading(false);
            setInputContainsFile(false);
            setUploaded(true);

            localStorage.setItem('imageId', res.data.id);

            swal("Uploaded!", "Your image has been uploaded!", "success");
        }
        ).catch(err => {
            console.log(err);
        }
        );
    } 



    const handleSubmit = (e) => {
        // e.preventDefault();
        
        setInputContainsFile(true);
        setSelectedImage(e.target.files[0]);
        
    }
    const handleClick = () => {
        if(inputContainsFile) {
        setLoading(true);
        fileUploadHandler();
        }
        
    }
    
    
  return (
      <>
      {selectedImage  && 
       <UploadButtonDiv>
           {!loading &&
        <button onClick={handleClick}>Upload</button>
           }
         <LoadingDotsDiv>
        {loading ? (<img src={LoadingDots} alt='loading' /> ): null}
        
        </LoadingDotsDiv>
        </UploadButtonDiv>
       }
    <BlogImageCointainerDiv>
        
       
       
        
        {selectedImage && (
            <Image>
            <img alt="not fount" src={URL.createObjectURL(selectedImage)} />
            <br />
            <button onClick={()=>{
                setSelectedImage(null);
               
            }
            
            }><ClearIcon /></button>
            </Image>
        )}
        <br />
        
        <br /> 
        
        {!selectedImage && (
        <AddImage>
        <label htmlFor="file" style={{ 
            background:"#F37527", 
            padding:"8px 12px",
            borderRadius:"5px",
            margin:"10px",
            color:"white",
            fontWeight:"bold",
            fontSize:"15px"
             }}
            
             >
         Add Photo
        </label>
        <input
            accept=".png, .jpg, .jpeg"
            type="file"
            name="file"
            id='file'
            style={({ visibility: 'hidden' })}
            onChange={handleSubmit}
        />
        
       
        
        </AddImage>

       
        )}
        
         
       
        
  
     </BlogImageCointainerDiv>
     </>
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

const LoadingDotsDiv = styled.div`
    position:absolute;
    transform: translateX(-120%);
    transform: translateY(-30%);
    
`;

const UploadButtonDiv = styled.div`

    position:absolute;
    top:50vh;
    left:80vh;

    button{
        background-color:#F37527;
        border:none;
        color:white;
        font-size:15px;
        padding:8px 12px;
        border-radius:5px;
    }

`;