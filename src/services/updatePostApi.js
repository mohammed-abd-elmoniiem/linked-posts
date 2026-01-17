import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";


export async function updatePost(id,image , body) {

        const formData = new FormData();

         if(image!=  null){
                    formData.append('image',image)
         }

        formData.append('body',body == '' ? ' ' : body );

       return  await axios.put(`https://linked-posts.routemisr.com/posts/${id}`,formData,{
            headers:{
                token:localStorage.getItem('token')
            }
        })
        
        
    }