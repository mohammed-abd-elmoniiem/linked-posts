import React, { useRef } from 'react'
import SingleComment from './SingleComment'
import axios from 'axios'
import toast from 'react-hot-toast'

function Comments({comments,post,postId,update}) {


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
      // console.log(res.data);
      update(postId)
      commentRef.current.value = ''
      toast.success('comment added successfully')
    })
    .catch(error=>{
      console.log(error)
      toast.error('Failed to add comment')
    })
  }

  function handleCommentSubmit(eve) {
    const commentText = commentRef.current?.value
    // console.log('Submitting comment:', commentText)
    addComment(commentText, postId)
    // Handle comment submission logic here
  }


  return (
    <div className='flex flex-col gap-1 p-1 rounded-xl text-sm mt-2'>
        <div className="w-full relative flex flex-wrap gap-2" >
            <input type="text" ref={commentRef} className=' grow  bg-neutral-100  dark:bg-neutral-700 p-2 rounded-md focus:outline-0' placeholder='Write a comment...  ' />

            <button onClick={handleCommentSubmit} className="bg-primary-c text-white ml-auto px-3 py-2 rounded-md   ">
              add comment
            </button>

           


        </div>
        <div className="w-full flex flex-col gap-2 mt-3">
            {comments.map(comment => (
                <SingleComment key={comment.id} comment={comment} post = {post}  update={update} />
            ))}
        </div>

    </div>
  )
}

export default Comments