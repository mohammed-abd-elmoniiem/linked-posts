

// import React, { useContext } from 'react'
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router';
// import { UserContext } from '../context/userContext';

export default function ProtectingRouting({ children }) {
  
 
  const navigator = useNavigate()

  // console.log(localStorage.getItem('token'))


    if (localStorage.getItem('token') == null) {
      
      return <Navigate to='/login' replace />
    }
 


  return  children;
}
