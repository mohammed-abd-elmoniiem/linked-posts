import React, { useRef } from 'react'
import SingleComment from './SingleComment'
import axios from 'axios'

function Comments({comments,postId,update}) {


  const commentRef = useRef(0)

  async function addComment(comment,postId ){ 

    await axios.post('https://linked-posts.routemisr.com/comments', {
      content: comment,
      post:postId
    },{
      headers:{
        token:localStorage.getItem('token') 
      }
    })
    .then(res=>{
      console.log(res.data);
      update()
      commentRef.current.value = ''
    })
    .catch(error=>{
      console.log(error)
    })
  }

  function handleCommentSubmit(eve) {
    const commentText = commentRef.current?.value
    console.log('Submitting comment:', commentText)
    addComment(commentText, postId)
    // Handle comment submission logic here
  }

  return (
    <div className='flex flex-col p-1 rounded-xl text-sm mt-2'>
        <div className="w-full relative">
            <input type="text" ref={commentRef} className='w-full  bg-neutral-100  dark:bg-neutral-700 p-2 rounded-md focus:outline-0' placeholder='Write a comment...  ' />

            <button onClick={handleCommentSubmit} className="bg-fuchsia-600 px-3 py-2 rounded-md text-white  absolute bottom-0 right-0">
              add comment
            </button>
        </div>
        <div className="w-full flex flex-col gap-2 mt-3">
            {comments.map(comment => (
                <SingleComment key={comment.id} comment={comment} />
            
            ))}
        </div>

    </div>
  )
}

export default Comments