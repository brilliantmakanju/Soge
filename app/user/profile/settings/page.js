import React from 'react'
import ProfileUpdate from '@/app/components/profile/ProfileUpdate'

const page = () => {
    return (
        <section className='w-full  min-h-screen xl:container xl:mx-auto  py-[6em] flex flex-col justify-center items-center px-2 lg:px-3 gap-4 ' >
            <div className='flex w-full lg:w-[60%] lg:shadow-lg lg:border-[4px] lg:rounded-md lg:border-[#005555]  flex-col justify-start items-center' >
                <ProfileUpdate />
            </div>
        </section>
    )
}

export default page