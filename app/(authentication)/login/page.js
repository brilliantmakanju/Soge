// 'use server'
import React from 'react'
import { getServerSession } from "next-auth"
import Login from '@/app/components/authentication/Form'
import { authOption } from "@/app/api/auth/[...nextauth]/route"
// import { useRouter } from 'next/router'

const page = async () => {
    // const router = useRouter()
    const session = await getServerSession(authOption)
    if(session === 'null') 
    if(session != 'null' ){
        window.location.href = "/"
    }

    return (
        <section className='flex  min-h-screen justify-center lg:px-10 xl:px-20 items-center pb-4 w-full' >
            <Login />
        </section>
    )
}

export default page