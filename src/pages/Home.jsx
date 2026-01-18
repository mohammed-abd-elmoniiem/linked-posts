import { Button } from "@heroui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../components/post/Post";
import CreatePost from "./CreatePost";




export default function Home(){


    const [allPosts, setallPosts] = useState(null)


    async function getAllPosts(){

        await axios.get('https://linked-posts.routemisr.com/posts?limit=20&sort=-createdAt',{
            headers:{
                token:localStorage.getItem('token')
            }
        })
        .then((data)=>{
        
            setallPosts(data.data.posts)
        })
        .catch(error=>{
            console.log(error)
        })


    }

    useEffect(()=>{
        getAllPosts()

    },[])



return(
    <>

    <div className="container mx-auto flex flex-col gap-1    py-4">

      <CreatePost update={getAllPosts}/>
        {
            allPosts == null?

           <>
                loading
            </> 

            :<>
                {
                    allPosts.map(post=>(
                        <Post key={post.id} post={post}  update={getAllPosts}  />
                    ))
                }
            </>  
        }
    </div>


    </>
)
}