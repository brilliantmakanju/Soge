'use client'
import { signIn } from "next-auth/react"


const Google =  () => {


    return (
        <div className="w-full py-6 flex justify-center items-center" >
            <button className="p-4 rounded-full w-[100%] px-1 text-white bg-[#005555] " onClick={() => signIn('google', { callbackUrl: '/' })} >Continue with Google</button>
        </div>
    )
}

export default Google