import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <NavLink to={`/signupUser`}>{'Sign Up'}</NavLink>
  )
}

export default Login