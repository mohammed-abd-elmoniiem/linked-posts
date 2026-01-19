import { Button } from "@heroui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../components/post/Post";
import CreatePost from "./CreatePost";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../App";
import Loading from "../components/Loading";
import Error from "../components/Error";




export default function Home(){


    // const [allPosts, setallPosts] = useState(null)


   function getAllPosts(){

        return axios.get('https://linked-posts.routemisr.com/posts?limit=20&sort=-createdAt',{
            headers:{
                token:localStorage.getItem('token')
            }
        })
        // .then((data)=>{
        
        //     setallPosts(data.data.posts)
        // })
        // .catch(error=>{
        //     console.log(error)
        // })


    }

    const{data :allPosts , isError ,isFetched, status} = useQuery({
      queryKey:['homePosts'],
      queryFn:getAllPosts,
      select:(data)=>data.data.posts,
    })

    
    if(status == 'success'){
      console.log("Posts fetched successfully");
    }
    if(status == 'loading'){
      console.log("Loading posts...");
    }

    if(isError){

      console.log("Error fetching posts");
    }

return(
    <>

    <div className="container mx-auto flex flex-col gap-1    py-4">
     

      <CreatePost update={()=>queryClient.invalidateQueries(['homePosts'])}/>

        {
          !isFetched &&

         
                <Loading/>
          
        }

        {
          isError &&<>
          <Error/>
          </>
        }
        {
            <>
                {
                    allPosts?.map(post=>(
                        <Post key={post.id} post={post}  update={()=>queryClient.invalidateQueries(['homePosts'])}  />
                    ))
                }
            </>  
        }
    </div>


    </>
)
}