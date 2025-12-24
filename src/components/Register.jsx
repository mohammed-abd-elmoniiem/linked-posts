// import { DatePicker } from "@heroui/react-datepicker";
import { Form, Input, Button, Select, SelectItem, DatePicker, DateInput} from "@heroui/react"
import { CalendarDate, parseDate } from "@internationalized/date";
import Svg from "./svg/Svg";

import { useForm } from 'react-hook-form'
import { signUp } from "../services/signUp";

export default function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    async function submitting(data) {

        console.log(data);
        console.log(await signUp(data));    

    }


    return (
        <>
            <section className="grow flex flex-col justify-center items-center text-white    ">

                <div className=" container mx-auto w-full  grow flex items-center justify-center gap-3 py-3 relative ">





                    <form className="w-full rounded-2xl  dark:z-2 p-4   flex flex-col justify-center gap-2 max-w-100  bg-[#ffffff] dark:bg-neutral-950 drop-shadow-lg  border border-white dark:border-0 text-black dark:text-white"
                        onSubmit={handleSubmit(submitting)}

                    >
                        <h2 className="text-2xl text-center uppercase justify-self-start">register </h2>
                        <Input

                            label="Name"
                            // labelPlacement="outside"
                            {...register("name", { required: true })}
                            type="text"
                        />

                        <Input
                            // variant="bordered"
                            placeholdere="Please enter a valid email"
                            label="Email"
                            // labelPlacement="outside"         
                            type="email"
                            {...register("email", { required: true })}
                        />

                        <Input
                            // variant="bordered"

                            label="password"
                            // labelPlacement="outside"
                            name="password"
                            type="password"

                            {...register("password", { required: true })}

                        />


                        <Input
                            // variant="bordered"

                            className="p-0 m-0"
                            label="rePassword"
                            // labelPlacement="outside"
                            name="rePassword"
                            type="password"

                            {...register("repassword", { required: true })}

                        />

                        <div className="flex  gap-3 my-2">


                           

                                      <DateInput {...register("birthOfDate")}
        description={"This is my birth date."}
        label={"Birth date"}
        placeholderValue={new CalendarDate(1995, 11, 6)}
      />

                            <Select className="max-w-xs placeholder:text-amber-300"
                                // variant="bordered" 
                                label="Select gender" name="gender"
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


                    <div className=" absolute inset-0 z-1 ">
                        {/* <Svg /> */}

                    </div>
                </div>

            </section>



        </>
    )
}