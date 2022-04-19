import React from 'react'
import { NavLink } from 'react-router-dom'

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
      <AdminPageLink admin='false'/>
    <NavLink to={`/signupUser`}>{'Sign Up'}</NavLink>
    <NavLink to={`/Signupadmin`}>{'Sign Up Admin'}</NavLink>
    </>
  )
}

export default Login