"use client"

import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";


const Socials = () => {
   
  const onClickHandler = (provider: "google" | "github") => {
    signIn(provider,{
        redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
  }

    return (
     <div className="w-full flex justify-center gap-x-4">
        <Button variant={"secondary"} className="cursor-pointer">
            <FcGoogle className="w-5 h-5"/>
        </Button>
        <Button variant={"secondary"} className="cursor-pointer" onClick={() => {onClickHandler("github")}}>
            <FaGithub className="w-5 h-5"/>
        </Button>
     </div>
    )
}

export default Socials;
