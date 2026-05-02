import * as z from "zod";



export const LoginSchema = z.object({
    email:  z.email({
        message: "Invalid email format"
    }),
    password: z.string().min(5,{
        message: "Min 5 characters"
    })
});


export const RegisterSchema = z.object({
    name: z.string().min(3,{
        message: "Min 3 characters"
    }),
    email:  z.email({
        message: "Invalid email format"
    }),
    password: z.string().min(5,{
        message: "Min 5 characters"
    })
});
