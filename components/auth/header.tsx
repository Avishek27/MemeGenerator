"use client"



interface HeaderProps{
    label: string;
}



const Header = ({label}: HeaderProps) => {
    return (
     <div className="flex flex-col justify-center items-center gap-y-3">
       <h1 className="text-3xl font-bold">Roaster</h1>
       <p>{label}</p>
     </div>
    )
}


export default Header;