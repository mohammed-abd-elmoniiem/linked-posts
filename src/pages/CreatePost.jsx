import axios from 'axios'
import React, { useRef,useState } from 'react'
import toast from 'react-hot-toast'

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
           
            update()

            setImageFile(null);
            bodyRef.current.value = '';

            toast.success('Post created successfully');
        })
        .catch(error=>{
            
            toast.error('Failed to create post');
        })
        
    }
  return (
    // <form className='bg-white dark:bg-neutral-800 dark:text-white p-3 flex flex-col gap-4 items-center rounded-md' 
    // onSubmit={handleSubmit} >

    //     <h2 className="capitalize">create post</h2>



    //     <div className="w-full">
    //         <textarea ref={bodyRef} name="body" id="body" className='w-full resize-none focus:outline-none bg-neutral-200 dark:bg-neutral-700 dark:text-white rounded-lg p-2 '>

    //         </textarea>
    //     </div>

    //     {

    //         // preview
    //             imageFile && 
    //             <div className="relative bg-neutral-200 dark:bg-neutral-700 rounded-md ">
    //                 <i className="fa fa-close absolute top-3 right-3" onClick={() => setImageFile(null)}></i>
    //                 <img src={URL.createObjectURL(imageFile)} alt="" />
    //             </div>
    //         }

    //     <div className="relative w-full">
    //         <input onChange={eve=>{
               
    //             setImageFile(eve.target.files[0])
    //         }} className='absolute top-0 bg-red-600 w-full opacity-0 ' type="file" name="" id="" />
    //         <i className="fa fa-image text-xl ">

    //         </i>

           
         

          
    //     </div>
         

    //     <button className='bg-fuchsia-600 w-fit px-5 rounded-md dark:text-white'>post</button>
    // </form>

      <form className='container mx-auto  my-8 bg-[#fff4] dark:bg-neutral-900 dark:text-white p-3 flex flex-col gap-4 items-center  rounded-md border border-neutral-200 dark:border-neutral-700 max-w-4xl drop-shadow-4xl' 
    onSubmit={handleSubmit} >

        <h2 className="capitalize text-3xl">create post</h2>



        <div className="w-full min-h-44">
            <textarea ref={bodyRef} name="body" id="body"  className='w-full resize-none focus:outline-none bg-neutral-200 dark:bg-neutral-800 dark:text-white rounded-lg p-2 h-full' placeholder='Write your post here...'>

            </textarea>
        </div>

        {

            // preview
                imageFile != null&& 
                <div className="relative bg-neutral-200 dark:bg-neutral-800 rounded-md ">
                    <i className="fa fa-close absolute top-3 right-3 " 
                    onClick={() => {
                     
                        setImageFile(null)}}></i>
                    <img src={URL.createObjectURL(imageFile)} alt="" />
                </div>
            }

        <div className="relative w-full  flex gap-2 ">
            <div className="relative  border rounded-full aspect-square centered  text-primary-c overflow-hidden cursor-pointer">
                        <input onChange={eve=>{
                    
                        setImageFile(eve.target.files[0])
                      
                    }} className='absolute top-0 bg-red-600 w-full opacity-0 ' type="file" name="" id="" />

                    <i className="fa fa-image text-2xl ">

                    </i>

            </div>

            <div className="aspect-square border rounded-full centered text-primary-c">
                <i className="fa fa-smile text-2xl"></i>
            </div>

           <div className="w-fit border rounded-full p-2 centered text-primary-c">
               <i className="fa fa-tag text-2xl"></i>
           </div>
           <div className="w-12 aspect-square border rounded-full p-2 centered text-primary-c">
                <i className="fa fa-map-marker-alt text-2xl"></i>
           </div>

           <div className="justify-self-start ml-auto">


               <button className='text-primary-c  border  w-fit px-5 rounded-md h-full dark:text-white'>post</button>
           </div>

        </div>
         

        
    </form>
  )
}

export default CreatePost