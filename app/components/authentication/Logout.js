'use client'
import { signOut } from "next-auth/react"


const Logout = () => {



    return (
        <button onClick={() => signOut()} className='bg-[#bf0c0c] px-7 py-2 text-white rounded-full transition duration-300 ease-in-out hover:bg-[red] ' >
            Logout
        </button>
    )
}

export default Logout
