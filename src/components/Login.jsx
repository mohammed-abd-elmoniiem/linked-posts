
// import { DatePicker } from "@heroui/react-datepicker";
import { Form, Input, Button, Select, SelectItem, DatePicker, DateInput} from "@heroui/react"

import * as zod from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { loginSchema } from "../services/LoginSchema";
import { set, useForm } from 'react-hook-form'
import { signIn } from "../services/signIn";
import { Link } from "react-router";
import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";



export default function Login() {

    const {setUser}=useContext(UserContext)
    


    const [serverMessage, setServerMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [returnState, setReturnState] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues:{
           
            "email": "abd.el.moniem@ggg.gg",
            "password": "123456789aA@",
            
    },
        resolver:zodResolver(loginSchema),
        mode:'onBlur',
        reValidateMode:'onChange'
    });

    async function submitting(data) {

        console.log(data);
        setIsLoading(true);
        await axios.post('https://linked-posts.routemisr.com/users/signin',data)
        .then(data=>{
            console.log(data.data.message)
            setServerMessage(data.data.message);
            setReturnState(true);

            // storelocal
            localStorage.setItem('token',data.data.token);

            setUser(data.data.token)


        })
        .catch(error=>{
            console.log(error.response.data.error)
            setServerMessage(error.response.data.error)
            setReturnState(false);
        })
        setIsLoading(false);    

    }


    return (
        <>
            <section className="grow flex flex-col justify-center items-center text-white    ">

                <div className=" container mx-auto w-full  grow flex items-center justify-center gap-3 py-3 relative ">





                    <form className="w-full rounded-2xl  z-2 p-4   flex flex-col justify-center items-center gap-2 max-w-100  bg-[#ffffff] dark:bg-neutral-900 drop-shadow-lg  border border-white dark:border-0 text-black dark:text-white"
                        onSubmit={handleSubmit(submitting)}

                    >
                        <h2 className="text-2xl text-center uppercase justify-self-start">login</h2>
                        

                        <Input
                            placeholdere="Please enter a valid email"
                            label="Email"        
                            type="email"
                            {...register("email", { required: true })}
                            isInvalid ={errors.email} 
                            errorMessage={errors.email?.message}
                        />

                        <Input label="password" type="password"
                             {...register("password")}
                            isInvalid ={errors.password} 
                            errorMessage={errors.password?.message}

                        />





                        


                        <Button isLoading={isLoading} type="submit" variant="shadow" className="bg-black w-fit px-8 text-white dark:bg-white dark:text-black  " color="black">
                            sign in
                        </Button>
                        {
                             serverMessage != null ? <p className= {`${returnState?'text-green-600':'text-red-600'} font-light text-sm`} >{serverMessage}</p>:null

                             }

                        <p className="text-sm font-light"> doesn't have an account? 
                            <Link to='/register' className="ml-3 underline text-sky-600">register</Link>
                        </p>

                       

                    </form>


                    
                </div>

            </section>



        </>
    )
}