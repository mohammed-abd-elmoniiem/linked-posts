import axios from 'axios'
import React, { useContext, useEffect ,useState} from 'react'
import UploadPhoto from '../components/UploadPhoto'
import Post from '../components/post/Post'
import { useQuery } from '@tanstack/react-query'
import { UserContext } from '../context/userContext'
import { queryClient } from '../App'
import { useNavigate } from 'react-router'
import Loading from '../components/Loading'



function Profile() {

    // const [UserData, setUserData] = useState(null)
    // const [posts, setPosts] = useState(null)

    const navigate = useNavigate();

    const {user ,setUser} = useContext(UserContext)
    


     const {status, data:userData,error} = useQuery({
        queryKey: ['userData'],
        queryFn:()=> axios('https://linked-posts.routemisr.com/users/profile-data',{
            headers:{
                token:localStorage.getItem('token')
            }
        }),
        refetchOnMount:false,
        refetchOnReconnect:true,
        refetchIntervalInBackground: true, 
        refetchOnWindowFocus:true,
        select:(data)=>data.data.user
    });

   

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




  

 

   

   

   
   

    
    


  

  return (<>
   {
        user == null ?
        <Loading/> 
        :
         <div className='dark:text-white mx-auto flex flex-col justify-center  items-center gap-4 text-center py-9'>
        
        <div className="img w-44 aspect-square rounded-full  outline-2 text-primary-c   p-2 relative">
            <img className='bg-neutral-300 w-full h-full object-cover rounded-full aspect-square   overflow-hidden animating' src={user?.photo} alt="profile img" />

            <div className="absolute -bottom-3 translate-x-1/2 left-1/2  p-2 text-primary-c text-3xl centered aspect-square border text-neutral-800 rounded-full bg-white dark:bg-neutral-900 group">
                <i className="fa fa-camera 
                "></i>
                <p className="text-sm font-light absolute top-full w-32 bg-white dark:bg-neutral-900    rounded-md text-primary-c border origin-top scale-0 group-hover:scale-100 transition-all duration-300">update profile image</p>
                <UploadPhoto/>
             </div>

             <div className="absolute -top-1 -left-2 p-1 text-primary-c text-lg centered aspect-square border text-neutral-800 rounded-full bg-white dark:bg-neutral-900 group" 
             onClick={() => navigate('/change-password')

             }>
                <i className="fa fa-gear"></i>
                <p className="text-sm font-light absolute top-full w-32 bg-white dark:bg-neutral-900    rounded-md text-primary-c border origin-top scale-0 group-hover:scale-100 transition-all duration-300">Change Password</p>
             </div>
        </div>
        <div className="">
            <h2 className="uppercase text-3xl ">{user?.name}</h2>
             <p className="text-sm font-light"> {user?.email}</p>
             
             <p className="text-sm font-light"> {user?.dateOfBirth}</p>
        </div>
        

       
        


        <div className="userPost container mx-auto flex flex-col gap-3">
            

            {
                posts == null ? <p>Loading...</p> : 
                    
                        posts.map(post => {
                            return <Post post={post} key={post._id} update={()=>queryClient.invalidateQueries(['userPosts'])} />
                        })
                    
                
            }
        </div>

    </div>
    }

  </>

   
   
   
  )
}

export default Profile