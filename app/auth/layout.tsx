"use client"


interface AuthLayoutProps{ 
    children: React.ReactNode;
}


const AuthLayout = ({children}: AuthLayoutProps) => {
    
    
    
    return (
      <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center space-y-4">
       {children}
      </main>
    )
}


export default AuthLayout;