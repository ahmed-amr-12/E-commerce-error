import * as z from "zod"

export const RegisterSchema = z.object({
name:z.string().nonempty("name is required").min(4,"name must be at least 4 characters"),
phone:z.string().nonempty("phone is required").regex(/^01[0-9]{9}$/
,"phone must contain only numbers"),
email: z.string().nonempty("email is required").email("invalid email"),
password:z.string().nonempty("password is required").min(8,"password must be at least 8 characters"),
rePassword:z.string().nonempty("confirm password is required").min(8,"confirm password must be at least 8 characters")
}).refine((data)=>data.password === data.rePassword,{
    path:["rePassword"],
    message:"passwords do not match"
})


export type RegisterType = z.infer<typeof RegisterSchema>