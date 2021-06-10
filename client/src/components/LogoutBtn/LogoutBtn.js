import React from 'react'
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutBtn = () => {
  const { logout, isAuthenticated } = useAuth0();
  
  return (
    isAuthenticated &&
    <Button 
      variant="outline-success" 
      onClick={logout}>
      Log out
    </Button>
  )
}

export default LogoutBtn
