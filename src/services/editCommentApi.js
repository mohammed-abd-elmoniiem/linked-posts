import axios from "axios";
import toast from "react-hot-toast";




export async function editComment(commentId, newContent) {
   

    return await axios.put('https://linked-posts.routemisr.com/comments/'+commentId,{
        content: newContent
    },{
        headers:{

            token:localStorage.getItem('token')

        }
    })
    .then(res=>{
        toast.success('the comment was edited successfully')
    })
    .catch(error=>{
        toast.error('there was an error editing the comment')
    })  
}