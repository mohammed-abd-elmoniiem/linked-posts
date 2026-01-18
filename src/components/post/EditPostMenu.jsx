import React, { useContext, useRef } from 'react'
import { UserContext } from '../../context/userContext'
import { deletePost } from '../../services/deletePost';
import toast from 'react-hot-toast';
import { queryClient } from '../../App';
import { useNavigate } from 'react-router';

export default function EditPostMenu({post}) {
            const navigator = useNavigate();


    const {user} = useContext(UserContext);
    // console.log(post.user._id == user._id)
    if(post.user._id != user._id) return <></>


    const menuRef = useRef()
    

    
    
    function toggleMenu(){
      menuRef.current.classList.toggle('scale-100');
      
    
    }
    
  return (
   
                    

    <div className="absolute right-0 top-0 z-100">
        <button className="edit  text-xl "

        onClick={toggleMenu}
        
        >
        ...
        </button>

        <div ref={menuRef} className="scale-0 origin-top duration-300 flex  flex-col gap-3 bg-neutral-50 dark:bg-neutral-900 p-2 rounded-md capitalize text-sm border border-gray-300 dark:border-gray-600 ">


        <button onClick={async ()=>{
            toggleMenu();

            await deletePost(post._id)
            .then(res=>{
                toast.success('post deleted successfully');
                queryClient.invalidateQueries('posts');
            })
            .catch(err=>toast.error('failed to delete post'))
            
          

            }}>delete</button>


        <button
        onClick={()=>{
            toggleMenu();
            navigator(`/update-post/${post._id}`);
        }}
        
        >edit</button>
        </div>
    </div>
    

                        
                      
                  
                      
                   
  )
}
