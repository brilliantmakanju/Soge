import ResetPassword from '@/app/components/authentication/Reset'
import React from 'react'

const page = () => {
    return (
        <section className='flex  min-h-screen justify-center lg:px-10 xl:px-20 items-center pb-4 w-full' >
            <ResetPassword />
        </section>
    )
}

export default page