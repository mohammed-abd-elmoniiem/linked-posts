

import axios from "axios";


export async function signUp(userdata){

    const res =  await axios.post('https://linked-posts.routemisr.com/users/signup', userdata);

    return res
  
        

    
}