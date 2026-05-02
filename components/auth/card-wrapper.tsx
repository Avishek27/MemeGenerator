"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Header from "@/components/auth/header";
import BackButton from "@/components/auth/back-button";
import Socials from "@/components/auth/Socials";


interface CardWrapperProps{
    children: React.ReactNode;
    label: string;
    backButtonHref: string;
    backButtonLabel: string;
    showSocial?: boolean;
}



const CardWrapper = ({
    children,
    label,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardWrapperProps) => {


    return (
       <Card className="w-100 shadow-md">
        <CardHeader>
            <Header label={label}/>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        {showSocial && (
            <CardFooter>
                <Socials/>
            </CardFooter>
        )}  
        <CardFooter>
            <BackButton href={backButtonHref} label={backButtonLabel}/>
        </CardFooter>
       </Card>
    )
}


export default CardWrapper;