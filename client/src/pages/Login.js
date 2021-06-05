import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import LoginBtn from '../components/LoginBtn/LoginBtn'

const Login = () => {
  const { isAuthenticated } = useAuth0();
  
  return (
    !isAuthenticated &&
    <div className='login-component fluid text-center' style={{'marginTop': '10%'}}>
      <h1 style={{fontSize: '50px'}}>Restricted Access</h1>
      <h4 style={{fontSize: '25px'}}>Please log in to continue</h4>
      <br></br>
      <LoginBtn name="Login" variant="info" size="lg" />
    </div>
  )
}

export default Login
