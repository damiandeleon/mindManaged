import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} style={{borderRadius: '50px', height: '50px'}}/>
        <p>Name: {user.name}</p>
        <p>First Name: {user.given_name}</p>
        <p>Family Name: {user.family_name}</p>
        <p>Email: {user.email}</p>
        <p>ID: {user.sub}</p>
      </div>
    )
  )
}

export default Profile
