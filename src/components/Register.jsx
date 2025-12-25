// import { DatePicker } from "@heroui/react-datepicker";
import { Form, Input, Button, Select, SelectItem, DatePicker, DateInput} from "@heroui/react"
import { CalendarDate, parseDate } from "@internationalized/date";
import Svg from "./svg/Svg";
import * as zod from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { registerSchema } from "../services/registerSchema";
import { useForm } from 'react-hook-form'
import { signUp } from "../services/signUp";



export default function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues:{
            "name": "mohmamed",
            "email": "fourtinato@ggg.gg",
            "password": "123456789aA@",
            "rePassword": "123456789aA@",
            "dateOfBirth": "2025-12-23",
            "gender": "male"
    },
        resolver:zodResolver(registerSchema),
        mode:'onBlur',
        reValidateMode:'onChange'
    });

    async function submitting(data) {

        console.log(data);
        console.log(await signUp(data));    

    }


    return (
        <>
            <section className="grow flex flex-col justify-center items-center text-white    ">

                <div className=" container mx-auto w-full  grow flex items-center justify-center gap-3 py-3 relative ">





                    <form className="w-full rounded-2xl  z-2 p-4   flex flex-col justify-center gap-2 max-w-100  bg-[#ffffff] dark:bg-neutral-900 drop-shadow-lg  border border-white dark:border-0 text-black dark:text-white"
                        onSubmit={handleSubmit(submitting)}

                    >
                        <h2 className="text-2xl text-center uppercase justify-self-start">register </h2>
                        <Input
                            type="text"
                            label="Name"
                           
                            // labelPlacement="outside"
                            {...register("name", { required: true })}
                           

                            isInvalid ={errors.name} 
                            errorMessage={errors.name?.message}
                        />

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


                        <Input
                           
                            label="rePassword"
                            type="password"
                            {...register("rePassword")}
                            isInvalid ={errors.rePassword} 
                            errorMessage={errors.rePassword?.message}

                        />

                        <div className="flex  gap-3 ">

                            <Input
                            {...register("dateOfBirth")}
                            type="date"
                              
                                label={"Birth date"}

                                isInvalid ={errors.dateOfBirth} 
                                errorMessage={errors.dateOfBirth?.message}
                            />

                            {/* <DatePicker  className="" label="Birth date" /> */}

                            <Select className="max-w-xs placeholder:text-amber-300"
                                label="Select gender" 
                                {...register("gender", { required: true })}

                            >
                                <SelectItem key={'male'}>{'Male'}</SelectItem>
                                <SelectItem key={'female'}>{'Female'}</SelectItem>
                                {/* <SelectItem key={'other'}>{'Other'}</SelectItem> */}
                            </Select>

                        </div>


                        <Button type="submit" variant="shadow" className="bg-black text-white dark:bg-white dark:text-black  " color="black">
                            Submit
                        </Button>

                    </form>


                    
                </div>

            </section>



        </>
    )
}