import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import LoginBtn from '../components/LoginBtn/LoginBtn'
import { Card } from 'react-bootstrap'
import './Login.css'
const Login = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div style={{color: 'white', fontSize: '50px', margin: '10%', textAlign: 'center'}}>Loading...</div>
  }
  
  return (
    !isAuthenticated &&
    <div className='login-component text-center' style={{'marginTop': '10%', color: 'white', width: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
      <Card.Body id="login-style">
        <h1 style={{fontSize: '50px'}}>Restricted Access</h1>
        <h4 style={{fontSize: '25px'}}>Please log in to continue</h4>
        <br></br>
        <LoginBtn name="Login" variant="success" size="lg" />
      </Card.Body>
    </div>
  )
}

export default Login
