"use client"
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function() {
    const router = useRouter();
    
    return <div className="align-item justify-center flex h-screen dark:text-white bg-black">
        <div className="flex-col justify-between ">
        <button className="p-2 m-2 rounded-sm bg-blue-500"  onClick={async()=>{
            await signIn("google");
        }} >Login with google</button>



        <button className="p-2 m-2 rounded-md bg-green-900"   onClick={async()=>{
            await signIn("github");
        }} >Login with Github</button>

        <button className="p-2 m-2 rounded-md bg-red-500"   onClick={async()=>{
            await signIn("github");
        }} >Login with Email</button>
 
     </div> 
    </div>
}