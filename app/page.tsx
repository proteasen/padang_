import Image from "next/image";
import { Button } from './components/button';
import { FcGoogle } from "react-icons/fc"; 
import {LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  
  const {getUser} = getKindeServerSession();
  const user = await getUser();

  return (
    <main className= "bg-[#f5c5ce] h-screen flex items-center justify-center p-10">
      <div className= "grid w-full h-full grid-cols-1 md:grid-cols-2 bg-[#f5c5ce]">  
        <img className="w-1/2 rounded-lg shadow-lg" // removed h-auto //
          src="/padanglogowobg.png" 
          alt="Padang & Co logo"
          srcSet="padanglogowobg.png 480w, padanglogowobg.png 800w, padanglogowobg.png 1200w"
          sizes="(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px"
        />
        <p className= "text-lg mt-4 text-center">
        </p>
        <p className= "mt-4 text-lg text-black text-center"> 
          {''}
        hi there! Welcome to Padang&apos;s &apos;padang&apos;.
        </p>
          <LoginLink>
            <Button className="flex items-center w-full gap-4 px-12 bg-transparent rounded-full" variant="outline">
              Sign In
            </Button>
          </LoginLink>
        <p className="mt-4 text-xs text-black">
        © 2024 | All rights reserved. [to include TOC and user policy]
        </p>
      </div>
    </main>
  );
}
