import axios from 'axios';
import React from 'react'

function UploadPhoto({update}) {

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
      update()
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
   

        <input type="file" accept="image/*" className='absolute top-0 left-0  bg-red-500 w-full opacity-0' onChange={handleFileChange} />
   
  )
}

export default UploadPhoto