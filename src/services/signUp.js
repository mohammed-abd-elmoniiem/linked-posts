

import axios from "axios";


export async function signUp(data){

    try{
        const {dat} = await axios.post('https://linked-posts.routemisr.com/users/signup', data);
        return data;
    } catch (error) {
        console.log(error);
    }

    
}