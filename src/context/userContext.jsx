
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { createContext, use, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { queryClient } from '../App';



export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [mode ,setMode] = useState(localStorage.getItem('mode') != null ? JSON.parse(localStorage.getItem('mode')) : true );




  const {data ,isLoading , isError,status} = useQuery({
    queryKey:['userData'],

    queryFn:()=>{
      return axios('https://linked-posts.routemisr.com/users/profile-data',{
        headers:{
          token:localStorage.getItem('token') 
        }
      })
    },
    refetchOnMount:false,
    refetchOnReconnect:true,
    refetchIntervalInBackground: true, 
    refetchOnWindowFocus:true,  


    select:(data)=>data.data.user,

  })

 

 




  // mode change

  useEffect(()=>{
    localStorage.setItem('mode', JSON.stringify(mode))
  },[mode])


  
    // ---------------------------

  useEffect(()=>{
     if(status == 'success'){
        setUser(data);
        console.log(data)
    
    toast.success('user data loaded successfully')
  }

  if(status == 'error'){
    toast.error('Failed to load user data')
  } 

  },[status])

  return (
    <UserContext.Provider value={{user,setUser,mode,setMode}}>
        {children}

    </UserContext.Provider>
  )
}

