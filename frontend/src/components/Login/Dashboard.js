import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components';
import swal from 'sweetalert';


function Dashboard() {
    
  return (
      <Main>
        
    <NavLink to={`/signupUser`}>{'Log In As User'}</NavLink>
    
    </Main>

  )
}

export default Dashboard

const Main = styled.div`
`;