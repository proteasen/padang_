import Image from "next/image";
import prisma from '../lib/prisma'
import Post from '../components/Post';
import { Button } from '../components/button';
import {LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

// useful for auth users to upload stuff + also check if any incognito mode reveals info
// if (!user) {
//  return new Response("error: not logged in", {status 401})
// }

async function getPosts(){
  const posts = await prisma.post.findMany({
    where: { published: true},
    include: {
      author: {
        select: {name: true}
      }
    }
  })
  return posts;
}

export default async function Home() {
  
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  
  const posts = await getPosts(); // console.log({posts});

  return (
    <main className="bg-[#f5c5ce] h-screen flex items-center justify-center p-10">
      <h1>Feed</h1>
    <Button className="flex items-center w-full gap-4 px-12 bg-transparent rounded-full" variant="outline">
    {user ? (
      <>
        <p>{user.given_name}</p>
        <LogoutLink>Log Out</LogoutLink>
      </>
    ) : (
        <LoginLink>Sign In</LoginLink>
    )}
    </Button>
      
      {
        posts.map((post) => {
          return (
            <Post 
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            authorName={post.author.name}
            />
          )
        })
      } 
    </main>
  )
}
