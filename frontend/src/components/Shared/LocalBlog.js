import axios from 'axios'
import React from 'react'
import BlogCard from './BlogCard'
import styled from 'styled-components'



function NepaliBlog() {
    const [blogs, setBlogs] = React.useState([]);
    const [search, setSearch] = React.useState('');
    const [result, setResult] = React.useState([]);
    const [isResult, setIsResult] = React.useState(false);
    
    axios.get(`newBlog/search/Local`)
    .then(res => {
        setBlogs(res.data);
        
    }
    ).catch(err => {
        console.log(err);
    }
    );
    
    
  return (
    <MainContent>
    <SearchBlogDiv>
      <input type={'text'} placeholder={'Search ...............'}
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
      }>Search</button>
      </SearchBlogDiv>

    <RightScreenSide>
      {result && result.map(blog => {
        
        return <BlogCard blogs={blog}/>
      }
      )}
      {!isResult && 
         blogs.slice(0,10).map(blog => {
              return <BlogCard blogs={blog}/>
         }
          )}
    </RightScreenSide>
    </MainContent>
  )
}

export default NepaliBlog

const RightScreenSide = styled.div`
`;

const MainContent = styled.div`
`;

const SearchBlogDiv = styled.div`
`;