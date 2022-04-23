import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import ClearIcon from '@mui/icons-material/Clear';
import Paragraph from './Paragraph';
import Tags from './Tags';







function BlogContent() {
    const [selectedImage, setSelectedImage] = useState(null);

    localStorage.setItem('selectedImage', selectedImage);
    
    if (selectedImage==null) {
        var paragraphNumber = prompt("How many paragraphs do you want to add?");
    }
    
    var paragraphArray = [];
    for(var i = 0; i < paragraphNumber; i++){
        paragraphArray.push(i);
    }

    


  return (
    <BlogContainer>
        <form>
        <BlogImageContainer>
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
 
        
      </BlogImageContainer>
      <BlogTextContainer>
          <BlogTitle>
            <input type="text" placeholder="Title" /> 
          </BlogTitle>
          <WriterName>
            <input type="text" placeholder="Writer Name" />
          </WriterName>
          <BlogText>
              <div>
              {paragraphArray.map(() => (
                    <Paragraph />
                ))
                }
               </div>
               {/* <Tags /> */}
                
              
          </BlogText>
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

const BlogImageContainer = styled.div`
    width:80%;
    height:70vh;
    border:2px solid #F37527;
    
    
`;

const Image = styled.div`
    
    button{
        position:absolute;
        top:180px;
        left:120px;
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

const BlogTextContainer = styled.div`
`;

const BlogTitle = styled.div`
    // transform:translatex(-210%);
    margin-top:40px;
    input{
        width:100%;
        height:40px;
        border:none;
        
        color:#F37527;
        font-size:20px;
        font-weight:bold;


    }
`;

const WriterName = styled.div`
    // transform:translatex(-205%);
    margin-top:10px;
    input{
        width:100%;
        height:20px;
        border:none;
        color:#0C3A52;
        font-size:15px;
        font-weight:bold;
    }
`;

const BlogText = styled.div`

    display:flex;
    

`;
