import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function AdminPageLink() {
  if(localStorage.getItem('admin') === 'true'){

  return (
    window.location.href = '/Admin/AdminPage'
  )
  }
}
function Login() {
  return (
      <>
      <RightScreen>
      <AdminPageLink admin='false'/>
      <NavLink to={`/signupUser`}>{'Log In As User'}</NavLink>
      </RightScreen>
    </>
  )
}

export default Login

const RightScreen = styled.div`
`;