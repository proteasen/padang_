import Image from "next/image";
import { Button } from './components/button';
import { FcGoogle } from "react-icons/fc"; 
import { Input } from "./components/input";
import { Label } from "./components/label";

export default function Home() {
  return (
    <main className= "bg-[#f5c5ce] h-screen flex items-center justify-center p-10">
      <div className= "grid w-full h-full grid-cols-1 bg-[#f5c5ce] md:grid-cols-2">
        <img className="w-1/2 h-auto rounded-lg shadow-lg"
          src="/padanglogowobg.png" 
          alt="Padang & Co logo"
          srcSet="image-small.jpg 480w, image-medium.jpg 800w, image-large.jpg 1200w"
          sizes="(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px"
        />
        <p className="text-lg mt-4 text-center">
        </p>
        <h1 className="text-3xl font-semibold text-center"> Login </h1>
        <p className="mt-2 text-m text-black-400 text-center"> 
          {''}
          Hi there! Welcome to Padang&apos;s &apos;padang&apos;.
        </p>
     
        <form>
          <Button className="flex items-center w-full gap-4 px-12 bg-transparent rounded-full"
          variant="outline"
          >
            <FcGoogle />
            Sign In with Google
          </Button>
          <Label htmlFor="email">Email*</Label>
          <Input 
            className="mt-2 mb-4 bg-transparent rounded-full"
            type="email" 
            id="email" 
            placeholder="Email" 
          />

          <Label htmlFor="email">Password*</Label>
          <Input 
            className="mt-2 mb-4 bg-transparent rounded-full"
            type="password" 
            id="password" 
            placeholder="Password" 
          />

          <Button 
            type="submit" 
            className="w-full mt-6 bg-indigo- rounded-full hover:bg"
            >
              Login
          </Button>
        </form>
        <p className="mt-4 text-xs text-slate-200">
          @2024 All rights reserved.
        </p>
      </div>
    </main>
  );
}
