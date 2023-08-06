import React from 'react'
import Header from '@/app/components/Header'
import Card from '@/app/components/profile/Card'

const page = async () => {
    return (
        <section className='w-full xl:container xl:mx-auto  pt-[6em] flex flex-col justify-start items-start px-3 gap-4 ' >
            {/* <Header value={"Profile"} style={" flex  justify-center items-center font-bold text-[30px]  lg:text-[40px] text-[#00204A] "} /> */}
            <Card info={true} />
        </section>
    )
}

export default page