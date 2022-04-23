import React from 'react'
import styled from 'styled-components';

function Paragraph() {
  return (
      <Main>
    <ParagraphHeader>
        <input type="text" placeholder="Heading" />

    </ParagraphHeader>
    <ParagraphContent>
        <textarea rows={16} placeholder="Content" />
    </ParagraphContent>
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
`;

const ParagraphContent = styled.div`
    input{
        width:100%;
        height:600px;
        border:none;
        outline:none;
        color:#0C3A52;
        font-size:15px;
        font-weight:700;
        padding:10px;
        

    }
`;