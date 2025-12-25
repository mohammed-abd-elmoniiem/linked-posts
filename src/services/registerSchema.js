
import * as zod from 'zod'
export const registerSchema = zod.object({
    name:zod.string().nonempty('name is required').min(3,'minmum length is 3').max(12,'maximum length is 6'),
    email:zod.string().nonempty('email is required').regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'invalid email format'),
    password:zod.string().nonempty('password is required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'invalid password format').min(8,'minimum length is 8'),
    rePassword:zod.string().nonempty('rePassword is required'),
    dateOfBirth:zod.string().nonempty('dateOfBirth is required').min(new Date(1900, 0, 1), 'invalid date').max(new Date(), 'invalid date'),
    gender:zod.string().nonempty('gender is required'),
}).refine(({password,rePassword})=>password === rePassword ,{ error:'not identical' ,path:['rePassword']})