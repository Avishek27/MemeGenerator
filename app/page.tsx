import LoginButton from "@/components/auth/login-button"

export default function Home() {
        //NavBar
      //Title of the website and slogan
      //Login button

  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-y-4 text-white bg-black">
     <div>
       <h1 className="text-4xl font-bold shadow-md">Roaster</h1>
     </div>
     <div>
      <LoginButton>
         Get Cooked Now!
      </LoginButton>
     </div>
    </main>  
  );
}
