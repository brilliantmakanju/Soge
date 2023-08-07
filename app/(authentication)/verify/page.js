import { verifyWithCredential } from '@/actions/authAction'
import React from 'react'

const page = async ({ searchParams: { token } }) => {

    const res = await verifyWithCredential(token)

    return (
        <section className='flex  min-h-screen justify-start lg:px-10 xl:px-20 items-center pb-4 w-full' >
            <h1 className='text-[25px] text-[green] ' >{res?.msg}</h1>
        </section>
    )
}

export default page