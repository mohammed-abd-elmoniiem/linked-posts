import axios from 'axios'
import React, { useContext, useEffect ,useState} from 'react'
import UploadPhoto from '../components/UploadPhoto'
import Post from '../components/post/Post'
import { useQuery } from '@tanstack/react-query'
import { UserContext } from '../context/userContext'
import { queryClient } from '../App'



function Profile() {

    // const [UserData, setUserData] = useState(null)
    // const [posts, setPosts] = useState(null)

    const {user} = useContext(UserContext)
    


    //  const {status, data:userData,error} = useQuery({
    //     queryKey: ['userData'],
    //     queryFn:()=> axios('https://linked-posts.routemisr.com/users/profile-data',{
    //         headers:{
    //             token:localStorage.getItem('token')
    //         }
    //     }),
    //     refetchOnMount:false,
    //     refetchOnReconnect:true,
    //     refetchIntervalInBackground: true, 
    //     refetchOnWindowFocus:true,
    //     select:(data)=>data.data.user
    // });

   

     const {status:userPostsStatus, data:posts,error:userError} = useQuery({
        queryKey: ['userPosts'],
        queryFn:()=> axios(`https://linked-posts.routemisr.com/users/${user?._id}/posts`,{
            headers:{
                token:localStorage.getItem('token')
            }
        })
        ,
        enabled:user == null ? false :true
        ,select:data=>{
            return data.data.posts
        }
    });




    //  async function getUserData(){

    //     console.log('token',localStorage.getItem('token'))

    //     await axios('https://linked-posts.routemisr.com/users/profile-data',{
    //         headers:{
    //             token:localStorage.getItem('token')
    //         }
    //     })
    //     .then((res)=>{
    //         console.log(res.data);
    //         setUserData(res.data.user)
    //         getuserPosts(res.data.user._id);
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })

    // }

 

   

   

   
    // async function getuserPosts(id) {

    //      await axios(`https://linked-posts.routemisr.com/users/${id}/posts`,{
    //         headers:{
    //             token:localStorage.getItem('token')
    //         }
    //     })
    //     .then((res)=>{
    //         console.log(res.data);
    //         setPosts(res.data.posts)
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
        
    // }


    // async function getUserData(){

    //     console.log('token',localStorage.getItem('token'))

    //     await axios('https://linked-posts.routemisr.com/users/profile-data',{
    //         headers:{
    //             token:localStorage.getItem('token')
    //         }
    //     })
    //     .then((res)=>{
    //         console.log(res.data);
    //         setUserData(res.data.user)
    //         getuserPosts(res.data.user._id);
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })

    // }

    // useEffect(()=>{
    //     getuserPosts(UserData?._id);

    // },[UserData])


  

  return (

   
    <div className='dark:text-white mx-auto flex flex-col justify-center  items-center gap-4 text-center py-9'>
        
        <div className="img w-44 aspect-square rounded-full  outline-2 text-primary-c   p-2 relative">
            <img className='bg-neutral-300 w-full h-full object-cover rounded-full  overflow-hidden' src={user?.photo} alt="profile img" />

            <div className="absolute -bottom-3 translate-x-1/2 left-1/2  text-3xl ">
                <i className="fa fa-camera 
                "></i>
                <UploadPhoto/>
             </div>
        </div>
        <h2 className="uppercase text-3xl ">{user?.name}</h2>

        <p className="">email: {user?.email}</p>
        <p className="">date of birth: {user?.dateOfBirth}</p>


        <div className="userPost container mx-auto flex flex-col gap-3">
            <h3 className="">your posts</h3>

            {
                posts == null ? <p>Loading...</p> : 
                    
                        posts.map(post => {
                            return <Post post={post} key={post._id} />
                        })
                    
                
            }
        </div>

    </div>
  )
}

export default Profile