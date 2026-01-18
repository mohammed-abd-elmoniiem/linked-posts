import axios from "axios";




export async function changePassword(currentPassword, newPassword) {


    return await axios.patch('https://linked-posts.routemisr.com/users/change-password', {
        password:currentPassword,
        newPassword:newPassword
    }, {
        headers: {
            token: localStorage.getItem('token')
        }
    });
}