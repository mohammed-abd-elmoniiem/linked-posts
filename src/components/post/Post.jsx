import React from 'react'
import PostUser from './PostUser'
import PostContent from './PostContent'
import PostReaction from './PostReaction'
import Comments from '../comments/Comments'
import { useNavigate } from 'react-router'

function Post({post ,update}) {

 

  return (
    <div className='rounded-2xl p-5 text-center dark:text-white dark:bg-neutral-800 bg-neutral-50 drop-shadow-2xl overflow-hidden'>

      <PostUser userName={post?.user?.name} imgUrl={post?.user?.photo} time={post?.createdAt}/>


      <PostContent bodyText={post?.body} bodyImg={post?.image} />

      <PostReaction comments={post.comments} postId={post._id} />

      <Comments comments={post.comments.slice(0, 1)} postId={post._id} update ={update} />

    </div>
  )
}

export default Post