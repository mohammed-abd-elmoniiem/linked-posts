import { Outlet } from "react-router"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { useContext, useState } from "react"
import { UserContext } from "../context/userContext"



export default function MainLayout(){
    const {user,mode} = useContext(UserContext)
    // const [, setMode] = useState(true);

    return(
        <>

        <main className={`${mode?'dark':''} bg-neutral-100 dark:bg-neutral-900 `}>
            {
                
                 <div className="flex flex-col justify-between min-h-screen max-w-4xl mx-auto   px-1 sm:px-0 ">
                <NavBar />


                <Outlet/>

                <Footer/>
                
            </div>

            }
           
           


        </main>

       
        
        </>
    )
}