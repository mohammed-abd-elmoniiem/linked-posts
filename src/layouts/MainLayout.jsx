import { Outlet } from "react-router"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { useContext, useState } from "react"
import { UserContext } from "../context/userContext"



export default function MainLayout(){
    const {user} = useContext(UserContext)
    const [mode, setMode] = useState(true);

    return(
        <>

        <main className={`${mode?'dark':''} `}>
            {
                user == null ?
                <>loading</>

                :
                 <div className="flex flex-col justify-between min-h-screen bg-neutral-100 dark:bg-neutral-900  px-1 sm:px-0 ">
                <NavBar setMode = {setMode} mode={mode}/>


                <Outlet/>

                <Footer/>
                
            </div>

            }
           
           


        </main>

       
        
        </>
    )
}