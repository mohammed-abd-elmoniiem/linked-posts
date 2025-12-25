

import axios from "axios";


export async function signIn(userdata){

    try{
        const {data} = await axios.post('https://linked-posts.routemisr.com/users/signin', userdata);
        return data;
    } catch (error) {
        console.log('fgfggf',error.response?.data);
    }

    
}