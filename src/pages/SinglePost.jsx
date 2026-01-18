

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

import Post from '../components/post/Post';
import axios from 'axios';
import PostContent from '../components/post/PostContent';
import PostReaction from '../components/post/PostReaction';
import PostUser from '../components/post/PostUser';
import Comments from '../components/comments/Comments';

function SinglePost() {
    const {id}= useParams();
    const [post, setPost] = useState(null);
    
    
   

    async function getPost(id){

        await axios.get(`https://linked-posts.routemisr.com/posts/${id}`,{
            headers:{
                token:localStorage.getItem('token')
            }
        })
        .then(res=>{
          
            setPost(res.data.post);
        })
        .catch(error=>{
            console.log(error);
        })
    }


            useEffect(() => {
                getPost(id);
            }, []);


  return (
    <div className=''>

       
     
     { 
     post == null ?
      <p>Loading...</p>
      :
       <div className='container mx-auto w-full rounded-2xl p-5 text-center dark:bg-neutral-800 dark:text-white drop-shadow-2xl overflow-hidden'>

      <PostUser userName={post?.user?.name} imgUrl={post?.user?.photo} time={post?.createdAt}/>


      <PostContent bodyText={post?.body} bodyImg={post?.image} />

      <PostReaction comments={post.comments} postId={post._id} />

      <Comments comments={post.comments} postId={post._id} update ={getPost} post={post} />

    </div>
    }
    </div>
  )
}

export default SinglePost