import React from 'react'
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';


const LoginBtn = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  
  return (
    !isAuthenticated &&
    <Button 
      variant="outline-info" 
      onClick={loginWithRedirect}>
      Log In
    </Button>
  )
}

export default LoginBtn
