import React from 'react'
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';


const LoginBtn = (props) => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    !isAuthenticated &&
    <Button 
      variant={props.variant} 
      onClick={loginWithRedirect}
      size={props.size}>
        {props.name}
    </Button>
  )
}

export default LoginBtn
