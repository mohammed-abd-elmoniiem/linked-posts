import axios from "axios";



export async function deletePost(postId){

    return await axios.delete('https://linked-posts.routemisr.com/posts/'+postId,{
        headers:{
            token:localStorage.getItem('token')
        }
    })
}