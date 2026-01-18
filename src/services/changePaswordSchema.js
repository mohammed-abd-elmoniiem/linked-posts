import { current } from "@reduxjs/toolkit";
import * as zod from "zod";



export const changePasswordSchema = zod.object({
    currentPassword:zod.string().nonempty('current password is required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'invalid password format ex. ahmed@123').min(8,'minimum length is 8'),
    newPassword:zod.string().nonempty('new password is required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'invalid password format ex. ahmed@123').min(8,'minimum length is 8'),
    repeatPassword:zod.string().nonempty('repeat password is required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'invalid password format ex. ahmed@123').min(8,'minimum length is 8'),
}).refine((data) => data.newPassword === data.repeatPassword ,{error:'not identical',path:['repeatPassword']})