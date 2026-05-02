"use client"

import { useRouter } from "next/navigation";

interface LoginButtonProps{ 
    children: React.ReactNode;
    modal?: "modal" | "redirect";
    asChild?: boolean
}



const LoginButton = ({children,modal,asChild}: LoginButtonProps) => {

  const router = useRouter();

  const onSubmitHandler = () => {
    router.push("/auth/login");
  }


  if(modal === "modal"){
    //TODO: Implement modal here
  }

    return (
        <span className="cursor-pointer" onClick={onSubmitHandler}>
            {children}
        </span>
    )
}


export default LoginButton;