"use server"

import { LoginSchema } from "@/schemas";
import * as z from "zod";




export const Login = async (values: z.infer<typeof LoginSchema>) => {
   
    const validatedInputs = LoginSchema.safeParse(values);
    
    if(!validatedInputs.success){
        return {
            error: "Invalid Format"
        };
    }

    const { email,password } = validatedInputs.data;
    return {
        success: "Successfully logged in"
    }
    
}