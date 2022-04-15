import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
      <>
    <NavLink to={`/signupUser`}>{'Sign Up'}</NavLink>
    <NavLink to={`/Signupadmin`}>{'Sign Up Admin'}</NavLink>
    </>
  )
}

export default Login