import React from 'react'
import Header from '../Header'
import Card from '../Card/Card'
import Link from 'next/link'

const Info = ({ info }) => {
    return (
        <div className='w-full px-2 py-4 gap-4 flex flex-col justify-start items-start h-auto ' >
            <div className='w-full flex justify-start items-start  sm:justify-between sm:items-center flex-col sm:flex-row md:flex-row  h-[100px]   px-2   ' >
                <Header style={" flex  justify-start items-center font-bold text-[30px]  lg:text-[32.5px] text-[#00204A] "} value={'Properties Listed'} />
                <Link href="/user/properties" className={`${info ? "" : "hidden"} px-4 py-3 md:px-6 md:py-4 text-white rounded-full bg-[#005555] hover:bg-[#033f3f] lg:hover:mt-[-10px] duration-300 transition ease-in-out`} >View all properties </Link>
            </div>
            <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-10 lg:grid lg:grid-cols-3 lg:gap-5 lg:px-5 xl:px-2 ' >
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Info