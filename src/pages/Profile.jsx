import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import UploadPhoto from '../components/UploadPhoto'
import Post from '../components/post/Post'

function Profile() {

    const [UserData, setUserData] = useState(null)
    const [posts, setPosts] = useState(null)

    async function getuserPosts(id) {

         await axios(`https://linked-posts.routemisr.com/users/${id}/posts`,{
            headers:{
                token:localStorage.getItem('token')
            }
        })
        .then((res)=>{
            console.log(res.data);
            setPosts(res.data.posts)
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }


    async function getUserData(){

        console.log('token',localStorage.getItem('token'))

        await axios('https://linked-posts.routemisr.com/users/profile-data',{
            headers:{
                token:localStorage.getItem('token')
            }
        })
        .then((res)=>{
            console.log(res.data);
            setUserData(res.data.user)
            getuserPosts(res.data.user._id);
        })
        .catch((err)=>{
            console.log(err)
        })

    }

    useEffect(()=>{
        getUserData();
      
    },[])


  

  return (

   
    <div className='dark:text-white mx-auto flex flex-col justify-center  items-center gap-4 text-center'>
        
        <div className="img w-44 aspect-square rounded-full  outline-2 outline-fuchsia-600 p-2 relative">
            <img className='bg-neutral-300 w-full h-full object-cover rounded-full  overflow-hidden' src={UserData?.photo} alt="profile img" />

            <div className="absolute -bottom-3 translate-x-1/2 left-1/2 text-fuchsia-800 text-3xl ">
                <i className="fa fa-camera 
                "></i>
                <UploadPhoto update={getUserData}/>
             </div>
        </div>
        <h2 className="uppercase text-3xl ">{UserData?.name}</h2>

        <p className="">email: {UserData?.email}</p>
        <p className="">date of birth: {UserData?.dateOfBirth}</p>


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