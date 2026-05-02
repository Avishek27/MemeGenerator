"use client"

import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const Socials = () => {
   


    return (
     <div className="w-full flex justify-center gap-x-4">
        <Button variant={"secondary"} className="cursor-pointer">
            <FcGoogle className="w-5 h-5"/>
        </Button>
        <Button variant={"secondary"} className="cursor-pointer">
            <FaGithub className="w-5 h-5"/>
        </Button>
     </div>
    )
}

export default Socials;
