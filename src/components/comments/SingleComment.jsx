

import React from 'react'

function SingleComment({comment}) {
  return (
    <div className='flex w-full flex-wrap justify-start gap-5 items-center px-5 py-2 bg-neutral-100 dark:bg-neutral-700 rounded-sm '>
        <div className="commentCreator flex  items-center gap-4">
             <div className="img w-9 aspect-square rounded-full  outline-1 outline-fuchsia-600  relative">
                  <img className='bg-neutral-300 w-full h-full object-cover rounded-full  overflow-hidden' src={"https://linked-posts.routemisr.com/uploads/default-profile.png"} alt="profile img" />

            </div>
            <div className="flex flex-col items-start">
              <p className="">{comment.commentCreator?.name}</p>
              <p className="text-[12px] text-gray-600">{comment.createdAt.replace("T", " ").substring(0, 16)}</p>
            </div>
           
        </div>

        <div className="">
            <p className="">{comment.content}</p>
        </div>
    </div>
  )
}

export default SingleComment