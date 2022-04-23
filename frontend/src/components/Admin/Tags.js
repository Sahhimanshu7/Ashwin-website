import React,{useRef} from 'react'
import { Data } from './data';
import styled from 'styled-components';
import TagsPrint from './TagsPrint';
import TagsAll from './TagsAll';

function Tags() {
    const [tags, setTags] = React.useState('');


    

    const handleChange = (e) => {
        e.preventDefault();
        setTags(e.target.value);
    }
    Data.push(tags);
    console.log(Data);
  return (
    <Main>
        
        <TagsEnter>
        <h1>Tags</h1>
        <input type='text' placeholder='tags' onKeyPress={
            (e) => {
                if (e.key === 'Enter') {
                    handleChange(e);
                }
            }
        }
        />
        </TagsEnter>
        <button className='button' type='submit'>Add</button>
       
        <TagsList>
            
            <TagsAll />
               
            
        </TagsList>
        
        
    </Main>
  )
}

export default Tags

const Main = styled.div`
`;

const TagsEnter = styled.div`
`;

const TagsList = styled.div`
`;