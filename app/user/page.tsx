import { Appbar } from "../ components/Appbar";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/auth";

export default async function(){

    const session = await getServerSession(NEXT_AUTH);
    return <div >
        <div className="dark:text-black">
        This is a Server component
        {JSON.stringify(session)}
        </div>
        <Appbar /> 

        
    </div>
}