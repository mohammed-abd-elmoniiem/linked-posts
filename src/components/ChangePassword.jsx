

import { Input } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { changePasswordSchema } from '../services/changePaswordSchema'
import { changePassword } from '../services/changePasswordApi'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { queryClient } from '../App'
import { UserContext } from '../context/userContext'

export default function ChangePassword() {
    const navigate = useNavigate();

    const {user ,setUser , status} = useContext(UserContext)

    const {register , handleSubmit , formState:{errors} 
    }=useForm({
        defaultValues:{
            currentPassword:'123456789aA@',
            newPassword:'123456789aA@',
            repeatPassword:'123456789aA@'
        },
        mode:'onBlur',
        resolver:zodResolver(changePasswordSchema)
    })

    function updatePassword(data){
        console.log(data)
        changePassword(data.currentPassword , data.newPassword)
        .then(res=>{
            toast.success('Password changed successfully');

            localStorage.setItem('token', res.data.token);
           
            
            navigate('/profile');
         
        })
        .catch(err=>{
            toast.error(err.response.data.error || 'Failed to change password');
            console.log(err.response.data);
        })

    }

    

  return (
    <div className='container mx-auto flex flex-col justify-center  items-center gap-4 text-center py-9  p-4 border rounded-xl drop-shadow-2xl border-white dark:border-neutral-700 bg-[#fff4] dark:bg-[#2224]'>
        <h2 className="text-primary-c capitalize">reset the password</h2>
        <form action="" onSubmit={handleSubmit(updatePassword)} className="w-full bg-transparent flex flex-col gap-4 max-w-md">


           <Input type='password' label='Current Password' {...register('currentPassword')} isInvalid = {errors?.currentPassword} errorMessage={errors?.currentPassword?.message}
           
           className="drop-shadow-2xl w-full p-0 m-0"
           />

           <Input type='password' label='new Password' {...register('newPassword')} isInvalid = {errors?.newPassword} errorMessage={errors?.newPassword?.message}

           className="drop-shadow-2xl w-full p-0 m-0"
           />

           <Input type='password' label='Repeat Password' {...register('repeatPassword')} isInvalid = {errors?.repeatPassword} errorMessage={errors?.repeatPassword?.message}
           
           className="drop-shadow-2xl w-full p-0 m-0"
           />
            <button type="submit" className="bg-primary-c text-white p-2 rounded-md w-fit mx-auto">Change Password</button>
        </form>
    </div>
  )
}
