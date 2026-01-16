import axios from "axios";
import toast from "react-hot-toast";


export async function deleleComment(commentId){

    await axios.delete('https://linked-posts.routemisr.com/comments/'+commentId,{
        headers:{
            token:localStorage.getItem('token')
        }
    })
    .then(res=>{
        toast.success('the comment was deleted successfully')
    })
    .catch(error=>{
        toast.error('error when deleting the comment')
    })
}