"use client"

import { signIn,signOut, useSession } from "next-auth/react";

export const Appbar = () =>{
    
    const session = useSession();

    return <div className="align-item justify-center flex h-screen dark:text-white bg-black">
        <div className="flex-col justify-between ">
        <button className="p-2 m-2 rounded-sm bg-blue-500"  onClick={()=>{
            signIn();
        }} >Signin</button>

        <button className="p-2 m-2 rounded-md bg-red-500"   onClick={()=>{
            signOut();
        }} >Logout</button>
        </div>
        {JSON.stringify(session)}
        
    </div>

}