import axios from 'axios'
import React, {  useRef,useState,useEffect } from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router'
import { updatePost } from '../../services/updatePostApi'
import { useNavigate } from 'react-router'

function UpdatePost() {

    const {id} = useParams();
    const navigate = useNavigate();
    



    const bodyRef = useRef(null)
    const [body ,setBody ]= useState(null)
    const [image , setImage] = useState(null)
    const [imageFile, setImageFile] = useState(null)


    function handleUpdate(eve){
         eve.preventDefault()

         console.log(imageFile,bodyRef.current.value)

         updatePost(id,imageFile , bodyRef.current.value)
         .then(res=>{
            console.log(res.data)
            toast.success('Post uploaded successfully');
            navigate('/home');

        })
        .catch(error=>{
            toast.error('Failed to upload post');
            console.log(error)
        })
         
            // uploadPost(imageFile , bodyRef.current.value)
         

         



    }



    // async function uploadPost(image , body) {


    //     const formData = new FormData();

    //      if(image!=  null){
    //                 formData.append('image',image)
    //      }

    //     formData.append('body',body == '' ? ' ' : body );

    //     await axios.post('https://linked-posts.routemisr.com/posts',formData,{
    //         headers:{
    //             token:localStorage.getItem('token')
    //         }
    //     })
    //     .then(res=>{
    //         console.log(res.data)
          

    //         setImageFile(null);
            
    //     })
    //     .catch(error=>{
    //         console.log(error)
    //     })
        
    // }



     async function getPost(id){
    
            await axios.get(`https://linked-posts.routemisr.com/posts/${id}`,{
                headers:{
                    token:localStorage.getItem('token')
                }
            })
            .then(res=>{
                console.log(res.data.post);
                toast.success('Post fetched successfully');
                setImage(res.data.post.image);
                setBody(res.data.post.body);
            })
            .catch(error=>{
                console.log(error);
                toast.error('Failed to fetch post');
            })
        }



    useEffect(() => {
        getPost(id);

       
    },[])


  return (
    <form className='container mx-auto min-h-screen my-8 bg-[#fff4] dark:bg-neutral-900 dark:text-white p-3 flex flex-col gap-4 items-center  rounded-md border border-neutral-200 dark:border-neutral-700 max-w-4xl drop-shadow-4xl' 
    onSubmit={handleUpdate} >

        <h2 className="capitalize text-3xl">update post</h2>



        <div className="w-full grow">
            <textarea ref={bodyRef} name="body" id="body" defaultValue={body} className='w-full resize-none focus:outline-none bg-neutral-200 dark:bg-neutral-800 dark:text-white rounded-lg p-2 h-full'>

            </textarea>
        </div>

        {

            // preview
                image != null&& 
                <div className="relative bg-neutral-200 dark:bg-neutral-800 rounded-md ">
                    <i className="fa fa-close absolute top-3 right-3 " 
                    onClick={() => {
                        setImage(null); 
                        setImageFile(null)}}></i>
                    <img src={image} alt="" />
                </div>
            }

        <div className="relative w-full  flex gap-2 ">
            <div className="relative w-12  border rounded-full aspect-square centered  text-primary-c  cursor-pointer">
                        <input onChange={eve=>{
                    
                        setImageFile(eve.target.files[0])
                        setImage(URL.createObjectURL(eve.target.files[0]))
                    }} className='absolute top-0 bg-red-600 w-full opacity-0 ' type="file" name="" id="" />

                    <i className="fa fa-image text-2xl ">

                    </i>

            </div>

            <div className="w-12 aspect-square border rounded-full  centered text-primary-c">
                <i className="fa fa-smile text-2xl"></i>l
            </div>

           <div className="w-12 border rounded-full p-2 centered text-primary-c">
               <i className="fa fa-tag text-2xl"></i>
           </div>
           <div className="w-12 aspect-square border rounded-full  centered text-primary-c">
                <i className="fa fa-map-marker-alt text-2xl"></i>
           </div>

           <div className="justify-self-start ml-auto">


               <button className='text-primary-c  border  w-fit px-5 rounded-md h-full dark:text-white'>update</button>
           </div>

        </div>
         

        
    </form>
  )
}

export default UpdatePost