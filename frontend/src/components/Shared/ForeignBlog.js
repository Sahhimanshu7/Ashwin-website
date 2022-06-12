import axios from 'axios'
import React from 'react'
import BlogCard from './BlogCard'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';



function NepaliBlog() {
    const [blogs, setBlogs] = React.useState([]);
    const [search, setSearch] = React.useState('');
    const [result, setResult] = React.useState([]);
    const [isResult, setIsResult] = React.useState(false);
    
    axios.get(`newBlog/search/Foreign`)
    .then(res => {
        setBlogs(res.data);
        
    }
    ).catch(err => {
        console.log(err);
    }
    );
    
    
  return (
    <BlogContainer>
    <MainContent>
      <LeftScreenSide>
        <GenreButton>Genres</GenreButton>
        <NepaliBlogButton><Link to={`/NepaliBlog`}>Nepali Blog</Link></NepaliBlogButton>
        <BandsBlogButton><Link to={`/LocalBlog`}>Bands Blog</Link></BandsBlogButton>
        <ForeignBlogsButton><Link to={`/ForeignBlog`}>Foreign Blogs</Link></ForeignBlogsButton>
      </LeftScreenSide>
    

    <RightScreenSide>
    <SearchBlogDiv>
      <input type={'text'} placeholder={'...............'}
      onChange={(e) => {
        setSearch(e.target.value);
      }
      }
      />
      <button onClick={
        () => {
          axios.get(`newBlog/search/${search}`)
          .then(res => {
            setResult(res.data);
          }
          ).catch(err => {
            console.log(err);
          }
          );
        }
      }><SearchIcon /></button>
      </SearchBlogDiv>
      <BlogContainerContainer>
      {result && result.map(blog => {
        
        return <BlogCard blogs={blog}/>
      }
      )}
      {!isResult && 
         blogs.slice(0,10).map(blog => {
              return <BlogCard blogs={blog}/>
         }
          )}
      </BlogContainerContainer>
    </RightScreenSide>
    </MainContent>
    </BlogContainer>
  )
}

export default NepaliBlog

const BlogContainer = styled.div`
    
`;


const RightScreenSide = styled.div`
  display:flex;
  flex-direction:column;
  
  width:100%;
  height:100%;
  padding:10px;
  
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  
  margin: 0 auto;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

`;

const SearchBlogDiv = styled.div`
background-color: #F37527;
padding: 0px;
  align-self: flex-end;
  margin: 20px;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  button{
    background-color: #F37527;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 120px;
    margin-left: 0px;
    cursor: pointer;
  }
  input{
    border: 1px solid #F37527;
    border-radius: 100px;
    padding: 6px;
    color:white;
    background-color: #F37527;
    width: 100%;
    height: 40px;

  }
  input::placeholder{
    color:white;
  }
  input:focus{
    outline: none;
  }

  @media (max-width: 768px) {
    align-self: center;
  }

`;
const LeftScreenSide = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;

  border:1px solid white;
  box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;

  

  padding:20px 20px;
  height:100%;
`;
const GenreButton = styled.div`
background-color: #F37527;
color: white;
border: none;
padding: 5px 40px;
border-radius: 5px;
font-size: 20px;
font-weight: 700;
`;
const NepaliBlogButton = styled.button`
background-color: #0C3A52;
  color: white;
  border: none;
  padding: 10px 30px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  a{
    text-decoration: none;
    color: white;

  }
`;
const BandsBlogButton = styled.button`
background-color: #F37527;
  color: white;
  border: none;
  padding: 10px 30px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  a{
    text-decoration: none;
    color: white;

  }
`;
const ForeignBlogsButton = styled.button`
background-color: #0C3A52;
  color: white;
  border: none;
  padding: 10px 22px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  a{
    text-decoration: none;
    color: white;

  }
`;

const BlogContainerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 0px;
  }
`;