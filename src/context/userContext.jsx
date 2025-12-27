
import React, { createContext, useEffect, useState } from 'react'


export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    if(localStorage.getItem('token') != null) {
      setUser(localStorage.getItem('token'))
    }
  },[])

  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}

    </UserContext.Provider>
  )
}

