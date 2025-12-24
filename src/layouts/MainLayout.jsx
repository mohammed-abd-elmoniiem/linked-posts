import { Outlet } from "react-router"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { useState } from "react"



export default function MainLayout(){

    const [mode, setMode] = useState(true)



    return(
        <>

        <main className={`${mode?'dark':''} `}>
            <div className="flex flex-col justify-between min-h-screen bg-neutral-100 dark:bg-black">
                <NavBar setMode = {setMode} mode={mode}/>


                <Outlet/>

                <Footer/>
                
            </div>

           


        </main>

       
        
        </>
    )
}