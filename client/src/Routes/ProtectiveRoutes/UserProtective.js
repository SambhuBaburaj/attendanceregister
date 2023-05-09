import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function UserProtective() {

    const AuthToken=localStorage.getItem('accessToken')
    const user=localStorage.getItem('User')
    if(!user&&AuthToken)
    {
        console.log('here');
        localStorage.removeItem('User')
      localStorage.removeItem('accessToken')
    

    }
  return (
    user&&AuthToken? <Outlet/>:<Navigate to='/'/>

  )
}

export default UserProtective