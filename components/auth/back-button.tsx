"use client"

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps{
    label: string;
    href: string;
}


const BackButton = ({label,href}:BackButtonProps) => {
 
    return (
      <div className="text-muted-foreground text-sm w-full text-center">
        <Button variant={"link"} size={"sm"} className="w-full cursor-pointer">
            <Link href={href}>{label}</Link>
        </Button>
      </div>
    )
}

export default BackButton;