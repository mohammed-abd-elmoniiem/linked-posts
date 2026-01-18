import axios from 'axios';
import React, { useContext } from 'react'


import { queryClient } from '../App';
import toast from 'react-hot-toast';
import { UserContext } from '../context/userContext';
import { set } from 'zod';
function UploadPhoto() {
 


  const {setUser} = useContext(UserContext);

  function handleFileChange(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('photo', file);
    console.log('Selected file:', file);
    putPhoto(formData);
  }

  async function putPhoto(formData){

    await axios.put('https://linked-posts.routemisr.com/users/upload-photo',formData,
      {
      headers:{
        token:localStorage.getItem('token')
      }
    })
    .then((res)=>{
      console.log(res.data);
      queryClient.invalidateQueries({queryKey:['userData']})
      .then(()=>{
        console.log('update pgoto' ,queryClient.getQueriesData({queryKey:['userData']})[0][1].data.user);
        setUser(queryClient.getQueriesData({queryKey:['userData']})[0][1].data.user);
        queryClient.invalidateQueries({queryKey:['userPosts']})
      })
      
      toast.success('Photo uploaded successfully')
    })
    .catch((err)=>{
      console.log(err)
      toast.error('Failed to upload photo')
    })
  }

  return (
   

        <input type="file" accept="image/*" className='absolute top-0 left-0  bg-red-500 w-full opacity-0' onChange={handleFileChange} />
   
  )
}

export default UploadPhoto