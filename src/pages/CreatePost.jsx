import axios from 'axios'
import React, { useRef,useState } from 'react'

function CreatePost({update}) {

    const bodyRef = useRef(null)
    const [imageFile, setImageFile] = useState(null)


    function handleSubmit(eve){
         eve.preventDefault()

         console.log(imageFile,bodyRef.current.value)

        
            uploadPost(imageFile , bodyRef.current.value)
         

         



    }



    async function uploadPost(image , body) {


        const formData = new FormData();

         if(image!=  null){
                    formData.append('image',image)
         }

        formData.append('body',body == '' ? ' ' : body );

        await axios.post('https://linked-posts.routemisr.com/posts',formData,{
            headers:{
                token:localStorage.getItem('token')
            }
        })
        .then(res=>{
            console.log(res.data)
            update()

            setImageFile(null);
            bodyRef.current.value = '';
        })
        .catch(error=>{
            console.log(error)
        })
        
    }
  return (
    <form className='bg-white dark:bg-neutral-800 dark:text-white p-3 flex flex-col gap-4 items-center rounded-md' 
    onSubmit={handleSubmit} >

        <h2 className="capitalize">create post</h2>



        <div className="w-full">
            <textarea ref={bodyRef} name="body" id="body" className='w-full resize-none focus:outline-none bg-neutral-200 dark:bg-neutral-700 dark:text-white rounded-lg p-2 '>

            </textarea>
        </div>

        {

            // preview
                imageFile && 
                <div className="relative bg-neutral-200 dark:bg-neutral-700 rounded-md ">
                    <i className="fa fa-close absolute top-3 right-3" onClick={() => setImageFile(null)}></i>
                    <img src={URL.createObjectURL(imageFile)} alt="" />
                </div>
            }

        <div className="relative w-full">
            <input onChange={eve=>{
               
                setImageFile(eve.target.files[0])
            }} className='absolute top-0 bg-red-600 w-full opacity-0 ' type="file" name="" id="" />
            <i className="fa fa-image text-xl ">

            </i>

           
         

          
        </div>
         

        <button className='bg-fuchsia-600 w-fit px-5 rounded-md dark:text-white'>post</button>
    </form>
  )
}

export default CreatePost