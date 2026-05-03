"use server"

import { getUserByEmail } from "@/data";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import  bcryptjs from "bcryptjs";
import * as z from "zod";




export const Register = async (values: z.infer<typeof RegisterSchema>) => {
   
    const validatedInputs = RegisterSchema.safeParse(values);
    
    if(!validatedInputs.success){
        return {
            error: "Invalid Format"
        };
    }

    const { name,email,password } = validatedInputs.data;
   
    const hashedPassword = await bcryptjs.hash(password,10);

    const existingUser = await getUserByEmail(email);

    if(existingUser){
        return {
            error: "Email already exists",
        }
    }

    try{
      await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
      })
    }catch(err){
      console.log(err);
      return {
        error: "Something went wrong. Please try again."
      }
    }
    
    return {
        success: "Successfully created an account"
    }
    
}