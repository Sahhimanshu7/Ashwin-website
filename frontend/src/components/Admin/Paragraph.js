import React from 'react'
import styled from 'styled-components';

function Paragraph() {
    const [paragraph, setParagraph] = React.useState('');
    const [heading, setHeading] = React.useState('');
    const [headings, setHeadings] = React.useState([]);
    const [paragraphs, setParagraphs] = React.useState([]);
   
    function removeParagraph(paragraph) {
        const newParagraphs = paragraphs.filter(p => p !== paragraph);
        setParagraphs(newParagraphs);
    }

  return (
      <Main>
    <ParagraphHeader>
        <input type="text" placeholder="Heading" id='heading'
        onChange={(event) => {
            setHeading(event.target.value);
            
        }
    }
        />

    </ParagraphHeader>
    <ParagraphContent>
        <textarea rows={10} cols={70} placeholder="Content" id='paragraph'
        onChange={(e)=>{
            setParagraph(e.target.value);
            
        }}/>
    </ParagraphContent>
    <ShowParagraph>
    <button onClick={(e)=>{
        e.preventDefault();
        setParagraphs([...paragraphs,<H2>{heading}</H2>, paragraph]); //push the paragraph to the array
        setHeadings([...headings, heading]); //push the heading to the array
        }} className='add'>Add</button>

        {paragraphs.map((paragraph)=>(
            <div className='paragraph-container'>
                {paragraph}
                <button className='remove'
                    onClick={(e) => {
                        e.preventDefault();
                        paragraphs.filter(removeParagraph(paragraph));

                    }
                }><svg xmlns="http://www.w3.org/2000/svg" width="36.489" height="27.567" viewBox="0 0 36.489 27.567">
                <g id="Group_7523" data-name="Group 7523" transform="translate(-1550.457 -726.056)">
                    <rect id="Rectangle_1235" data-name="Rectangle 1235" width="36.489" height="27.567" rx="7.971" transform="translate(1550.457 726.056)" fill="#fff"/>
                    <rect id="Rectangle_1236" data-name="Rectangle 1236" width="23.513" height="3.505" transform="translate(1557.117 737.84)" fill="#0c3a52"/>
                </g>
                </svg>
                </button>
            </div>
        ))}
    </ShowParagraph>

            
    </Main>
  )
}

export default Paragraph

const Main = styled.div`

`;

const ParagraphHeader = styled.div`
    input{
        width:100%;
        height:30px;
        border:none;
        color:#F37527;
        font-weight:700;
        font-size:20px;
        padding:10px;
    }
    input:focus{
        outline:none;
    }
`;

const ParagraphContent = styled.div`
    textarea{
        width:100%;
        border:none;
        outline:none;
        color:#0C3A52;
        font-size:15px;
        font-weight:700;
        padding:10px;
        

    }
    input:focus{
        outline:none;
    }
    
   
`;

const H2 = styled.h2`
    font-size:20px;
    font-weight:700;
    color:#F37527;
    margin-top:20px;
    margin-bottom:20px;
    padding:10px 0px;
`;

const ShowParagraph = styled.div`
    font-size:15px;
    color:#0C3A52;

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
    svg{
        width:20px;
        height:20px;
        margin-left:10px;
        margin-right:5px;
        margin-top:3px;
        fill:white;

    }
    .remove{
        color:#F37527;
        background-color: white;
        border:none;
        padding:0px;
        margin-right:20px;
    }

    .paragraph-container{
        display:flex;
        flex-direction:row;
        align-items:flex-start;
        justify-content:space-between;
    }

`;