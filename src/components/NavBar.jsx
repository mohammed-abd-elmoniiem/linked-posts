

import { Link, NavLink } from "react-router"
import Li from "./li"

import '@fortawesome/fontawesome-free/css/all.css'
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


export default function NavBar({setMode, mode}){

    const [isOpen , setIsOpen] = useState(false)

    const ulRef= useRef()

    gsap.registerPlugin(useGSAP)

    

      useGSAP(()=>{
        gsap.from(ulRef.current,{
            duration:0.2,
            opacity:0
        })
    },[isOpen])

     useGSAP(()=>{
        gsap.from(ulRef.current.querySelectorAll('li'),{
            duration:0.2,
            x:40,
            opacity:0,
            stagger:0.1,
            delay:0
        })
    },[isOpen])
  

    const links = ['home','register','login','profile'];

    function displayUl(){  
            ulRef.current.classList.replace('hidden','flex');
            setIsOpen(!isOpen)

           
    }

    function hiddenUl(e){
            ulRef.current.classList.replace('flex','hidden');
    }

    return(
        <>

        <nav className=" w-full sticky sm:static px-3 py-2   z-10  dark:bg-neutral-800 dark:text-white  shadow
         shadow-gray-300 dark:shadow-black" >

            <div className="container mx-auto  flex justify-between items-center  ">

                 <div className=" uppercase text-2xl ">
                             <Link to='/home'>social app</Link>
                
                    </div>

            <div className="sm:hidden peer text-2x pr-5 flex items-center gap-3"  >

                 <div

                className="w-8 h-8 rounded-full  flex items-center justify-center"
                onClick={()=>{
                    setMode(!mode)
                }}
                
                >
                
                    <i className={`fa ${!mode?'fa-moon':'fa-sun'} `}></i>
                </div>

                
                <i className="fa fa-bars  "
                 onClick={()=>{
                displayUl()

            }}
                
                ></i>

                                                  {/*                 dark mode */}

               
            </div>


          

            

            <ul ref={ulRef} className="h-screen hidden top-0  right-0 w-1/2 absolute sm:static   sm:w-fit  sm:h-fit sm:flex flex-col items-start sm:flex-row gap-3 backdrop-blur-lg bg-gray-200  sm:bg-transparent px-4 py-12 sm:p-2 capitalize font-light sm:border-0 "
                    onClick={e=>{
                    hiddenUl(e)
                        }} 
            
            >

            <li className="self-end sm:hidden">
                <i className="fa fa-close"></i>
            </li>

            
             
             
            {links.map(link=> <Li key={link} link={link}/>)
            }

             <li

                className=" hidden sm:block "
                onClick={()=>{
                    setMode(!mode)
                }}
                
                >
                
                    <i className={`fa ${!mode?'fa-moon':'fa-sun'} `}></i>
                </li>
 
            </ul>



            </div>
           

        </nav>
        </>
    )
}