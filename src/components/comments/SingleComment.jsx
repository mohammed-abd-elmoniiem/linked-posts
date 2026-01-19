

import React, { useContext, useRef, useState } from 'react'
import { queryClient } from '../../App'
import { UserContext } from '../../context/userContext'
import { deleleComment } from '../../services/deleteCommentApi';
import { editComment } from '../../services/editCommentApi';

function SingleComment({comment,post, update}) {

const{user}  = useContext(UserContext);
const [ updateComment , setUpdateComment] = useState(false)
const menuRef = useRef()

  const commentRef = useRef(0)


  function toggleMenu(){
    menuRef.current.classList.toggle('scale-100');
    

  }

  async function handleCommentUpdate(eve) {
  
  
    await editComment(comment._id,commentRef.current.value);
    update(comment.post)
    setUpdateComment(false)
   
  }




  return (
    <div className='flex w-full flex-col justify-start gap-5 items-center px-5 py-2 bg-[#ffffff77] dark:bg-[#0001] border dark:border-neutral-700 border-[#fff4] rounded-lg drop-shadow-lg'>
        <div className="commentCreator w-full flex  justify-start gap-4 relative">
             <div className="img w-9 aspect-square rounded-full  outline-1 text-primary-c  relative">
                  <img className=' bg-neutral-300 w-full h-full object-cover rounded-full  overflow-hidden' src={"https://linked-posts.routemisr.com/uploads/default-profile.png"} alt="profile img" />

            </div>
            <div className="flex flex-col items-start">
              <p className="">{comment.commentCreator?.name}</p>
              <p className="text-[12px] font-light text-opacity-70 text-primary-c">{comment.createdAt.replace("T", " ").substring(0, 16)}</p>
            </div>

            
              {/* /menu of delete or edite the comment */}
            {
              comment.commentCreator._id == user?._id &&
 
              <div className="absolute right-0 top-0 z-100">
                <button className="edit  text-xl "

                onClick={toggleMenu}
                
                >
                   ...
                  </button>

                <div ref={menuRef} className="scale-0 origin-top duration-300 flex  flex-col gap-3 bg-neutral-50 dark:bg-neutral-900/10 p-2 rounded-md capitalize text-sm border border-gray-300 dark:border-gray-600 ">


                {

                  post.user._id== user?._id &&
                  <button onClick={async ()=>{
                      toggleMenu();

                      await deleleComment(comment._id);
                      update(comment.post);
                      // console.log(comment._id)

                    }}>delete</button>

                }


                  


                  <button
                  onClick={()=>{
                    toggleMenu();
                    setUpdateComment(!updateComment)

                  }}
                  
                  >edit</button>
                </div>
              </div>
            

                
              
          
              
            }
           
        </div>
        {
          updateComment?
            <div className="w-full relative flex flex-wrap gap-2 justify-end" >
            
              <input type="text" defaultValue={comment.content}  ref={commentRef} className='w-full  bg-neutral-200  dark:bg-neutral-600 p-2 mb-2 rounded-md focus:outline-0 border border-white dark:border-neutral-500' placeholder='Write a comment...  ' />

            

              <button onClick={handleCommentUpdate} className="bg-primary-c px-3 py-2 rounded-md text-white  ">
                update comment
              </button>

                <button className="  text-primary-c border mx-2 px-3 py-2 rounded-md text-white  "
              onClick={() => setUpdateComment(false)}
              >
                cancel
              </button>


          </div>

          :

          <div className="">
            <p className="">{comment.content}</p>
         </div>
        }

        
        
    </div>
 
  )
}

export default SingleComment