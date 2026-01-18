import React from 'react'
import { useNavigate } from 'react-router';

function PostReaction({comments, postId}) {
     const navigator = useNavigate();
     

    
  return (
    <div className='flex justify-between px-8 text-sm font-light capitalize cursor-pointer'>
        <div className="likes flex items-center gap-1">
           
            <i className="fa-regular fa-thumbs-up "></i> like
        </div>

        <div className="comment flex items-center gap-1"
        onClick={() => {
            navigator(`/single-post/${postId}`)
        }}  
        >
            <i className="fa-regular fa-comment"></i>
            comment
            <span>{comments.length}</span>
        </div>

        <div className="share flex items-center gap-1">
            <i className="fa-solid fa-share"></i>
            share
        </div>
    </div>
  )
}

export default PostReaction