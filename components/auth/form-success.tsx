"use client"

import { CheckCircledIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons";



interface FormSuccessProps {
    message: string | undefined;
}

export const FormSuccess = ({message}: FormSuccessProps) => {

    if(!message){
        return null;
    }
    return (
     <div className = "w-full flex items-center gap-x-4 bg-emerald-500 p-3 rounded-md text-emerald-800">
       <CheckCircledIcon/>
       {message}
     </div>
    )
}