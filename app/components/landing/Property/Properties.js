'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Card from '../../Card/Card'
import { motion } from 'framer-motion'

const Properties = () => {
    const [width, setWidth] = useState(0)
    const carsouel = useRef()

    // const scrollLeft = () => {
    //     document.getElementById("content").scrollLeft -= carsouel.current.scrollWidth - carsouel.current.offsetWidth ;
    // }
    // const scrollRight = () => {
    //     document.getElementById("content").scrollLeft += carsouel.current.scrollWidth - carsouel.current.offsetWidth;
    // }


    useEffect(() => {
        setWidth(carsouel.current.scrollWidth - carsouel.current.offsetWidth )
    }, [])

    return (
        <div className='flex flex-col gap-5 w-full ' >

            <motion.div ref={carsouel} className='overflow-hidden' >
                <motion.div
                    drag={'x'}
                    id="content"
                    whileTap={{cursor: 'grabbing'}} 
                    dragConstraints={{ right: 0, left: -width }}
                    className=" flex cursor-grab  gap-4 py-5 w-full px-5 scroll-smooth "
                >
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </motion.div>
            </motion.div>
            {/* <div className='flex justify-between py-5 px-[10px] items-center w-full ' >
                <button onClick={scrollLeft} className='w-[100px] py-3 md:px-6 md:py-4  hover:text-white bg-[#80808091] text-[#00204A] outline-none rounded-full hover:bg-[#00204A] transition ease-in-out duration-500' >Prev</button>
                <button onClick={scrollRight} className='w-[100px] py-3 md:px-6 md:py-4 hover:text-white bg-[#80808091] text-[#00204A] outline-none rounded-full hover:bg-[#00204A] transition ease-in-out duration-500' >Next</button>
            </div> */}
        </div>
    )
}

export default Properties