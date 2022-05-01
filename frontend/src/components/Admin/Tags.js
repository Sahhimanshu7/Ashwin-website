import React from 'react'
import styled from 'styled-components';

function Tags() {
    const [tags, setTags] = React.useState(['tags']);
    const [tag, setTag] = React.useState('');
    

    function removeTag(tag) {
        const newTags = tags.filter(t => t !== tag);
        setTags(newTags);
    }
    
    
  return (
    <Main>
        <H1>Tags</H1>
        <TagsTags>
        <TagsHeader>
            <input type="text" placeholder="Tags" 
            onChange={(event) => {
                setTag(event.target.value);
            }
        }
            />
            
        </TagsHeader>
        <TagsContent>
            {tags.map((tag) => (
                
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36.489" height="36.489" viewBox="0 0 36.489 36.489">   <g id="Group_7529" data-name="Group 7529" transform="translate(-1548.482 -3842.989)">     <g id="Group_7521" data-name="Group 7521">       <rect id="Rectangle_1230" data-name="Rectangle 1230" width="36" height="36" rx="7.971" transform="translate(1548.482 3842.989)" fill="#fff"/>       <circle id="Ellipse_193" data-name="Ellipse 193" cx="9.26" cy="9.26" r="9.26" transform="translate(1557.467 3851.973)" fill="#0c3a52"/>     </g>   </g> </svg>
                    {tag}
                    {localStorage.setItem('tags', tags)}
                    <button className='remove'
                    onClick={(e) => {
                        e.preventDefault();
                        tags.filter(removeTag(tag));

                    }
                }
                    ><svg xmlns="http://www.w3.org/2000/svg" width="36.489" height="27.567" viewBox="0 0 36.489 27.567">
                    <g id="Group_7523" data-name="Group 7523" transform="translate(-1550.457 -726.056)">
                        <rect id="Rectangle_1235" data-name="Rectangle 1235" width="36.489" height="27.567" rx="7.971" transform="translate(1550.457 726.056)" fill="#fff"/>
                        <rect id="Rectangle_1236" data-name="Rectangle 1236" width="23.513" height="3.505" transform="translate(1557.117 737.84)" fill="#0c3a52"/>
                    </g>
                    </svg>
                    </button>

                </div>

            ))}

            <button className="add" onClick={(e) => {
                e.preventDefault();
                setTags([...tags, tag]);
               
                
                
            }}>Add</button>
        </TagsContent>
        </TagsTags>
       
    </Main>
  )
  
}

export default Tags


const Main = styled.div`
    background-color: #0C3A52;
    padding:10px 20px;
    display:flex;
    flex-direction:column;
`;
const TagsHeader = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    input{
        background-color: #0C3A52;
        width:250px;
        height:25px;
        border:.5px solid white;
        border-radius:10px;
        color:white;
        font-weight:700;
        font-size:20px;
        margin:10px 20px;
    }
    input:focus{
        outline:none;
    }

`;
const TagsContent = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    
    flex-wrap:wrap;
    width:100%;
    margin-top:20px;

    color:white;

    svg{
        width:20px;
        height:20px;
        margin-left:10px;
        margin-right:5px;
        margin-top:3px;
        fill:white;
    }



    .add{
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
    
    .remove{
        background-color: #0C3A52;
        padding:0px;
        border:none;
        
    }
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
    border-radius:15px;
    width:100%;
`;
