
// import { DatePicker } from "@heroui/react-datepicker";
import { Form, Input, Button, Select, SelectItem, DatePicker, DateInput} from "@heroui/react"

import * as zod from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { loginSchema } from "../services/LoginSchema";
import { useForm } from 'react-hook-form'
import { signIn } from "../services/signIn";



export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues:{
           
            "email": "fourtinato@ggg.gg",
            "password": "123456789aA@",
            
    },
        resolver:zodResolver(loginSchema),
        mode:'onBlur',
        reValidateMode:'onChange'
    });

    async function submitting(data) {

        console.log(data);
        console.log(await signIn(data));

    }


    return (
        <>
            <section className="grow flex flex-col justify-center items-center text-white    ">

                <div className=" container mx-auto w-full  grow flex items-center justify-center gap-3 py-3 relative ">





                    <form className="w-full rounded-2xl  z-2 p-4   flex flex-col justify-center gap-2 max-w-100  bg-[#ffffff] dark:bg-neutral-900 drop-shadow-lg  border border-white dark:border-0 text-black dark:text-white"
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





                        


                        <Button type="submit" variant="shadow" className="bg-black text-white dark:bg-white dark:text-black  " color="black">
                            sign in
                        </Button>

                    </form>


                    
                </div>

            </section>



        </>
    )
}