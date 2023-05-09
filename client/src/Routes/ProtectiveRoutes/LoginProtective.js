import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import AdminInstance from '../../API/Axios';

function LoginProtective() 
{
    console.log('hereme too');
    const AuthToken=localStorage.getItem('accessToken')
    const user=localStorage.getItem('User')
    if(!user&&AuthToken)
    {
     
      localStorage.removeItem('accessToken')
      localStorage.removeItem('User')

    }

    return (
        user&&AuthToken? <Navigate to='/home'/>:<Outlet/>
       )
}

export default LoginProtective