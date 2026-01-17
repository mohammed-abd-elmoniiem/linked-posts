import React from 'react'
import PostUser from './PostUser'
import PostContent from './PostContent'
import PostReaction from './PostReaction'
import Comments from '../comments/Comments'
import { useNavigate } from 'react-router'
import EditPostMenu from './EditPostMenu'

function Post({post ,update}) {

 

  return (
    <div className='rounded-lg p-5 text-center dark:text-white border border-white dark:border-neutral-800 drop-shadow-2xl overflow-hidden relative'>
      <EditPostMenu post={post}/>

      <PostUser userName={post?.user?.name} imgUrl={post?.user?.photo} time={post?.createdAt}/>


      <PostContent bodyText={post?.body} bodyImg={post?.image} />

      <PostReaction comments={post.comments} postId={post._id} />

      <Comments comments={post.comments.slice(0, 1)} postId={post._id} update ={update} />

    </div>
  )
}

export default Post