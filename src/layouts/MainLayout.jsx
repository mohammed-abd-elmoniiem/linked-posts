import { Outlet } from "react-router"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Suspense, useContext, useState } from "react"
import { UserContext } from "../context/userContext"
import Loading from "../components/Loading"



export default function MainLayout(){
    const {user,mode} = useContext(UserContext)
    // const [, setMode] = useState(true);

    return(
        <>

        <main className={`${mode?'dark':''} `}>
            {
                
                 <div className="flex flex-col justify-between min-h-screen    px-1 sm:px-0  bg-neutral-100 dark:bg-neutral-900">
                <NavBar />

                <Suspense fallback = {<Loading/>}>
                
                <Outlet/>
                
                </Suspense>


                

                <Footer/>
                
            </div>

            }
           
           


        </main>

       
        
        </>
    )
}