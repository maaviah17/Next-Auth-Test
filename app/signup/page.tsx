export default function(){
    return <div className="bg-purple-400 h-screen dark:text-white flex flex-col justify-center items-center">
        <span className="bg-blue-800 p-3 rounded-md mb-4" >Signup page this is   </span><br />
        <div className="rounded-sm flex flex-col w-1/5 justify-center  bg-red-100">
        <input className="border dark:text-black border-white m-2 p-2" type="text" placeholder="enter email"/> <br />
        <input className="border dark:text-black border-white m-2 p-2" type="password" placeholder="enter password"/><br />
            <div>
                <button className="bg-blue-700 m-2 p-2 rounded-md">Signup</button>
            </div>
        </div>
    </div>
}