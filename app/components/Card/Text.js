import React from 'react'
import Header from '../Header'
import { CardContent } from '@mui/material'

const CardText = () => {
    return (
        <>
            <div className="ww-auto py-4 px-5 flex flex-col justify-start items-start">
                <div className="title font-semibold text-[25px] text-[#005555] underline underline-offset-[9px] my-1">
                    $1,291,000
                </div>
                <div className="category text-xs font-light my-1">
                    5232 California Fake, Ave. 21BC
                </div>

                <div className=" flex items-center">
                    <div className='text-[30px] font-bold' >California, USA</div>
                </div>
                <div className="flex items-center my-2">
                    <span className=" px-3 py-1 text-sm rounded-lg mr-1 ">
                        2 beds
                    </span>
                    <span className=" px-3 py-1 text-sm rounded-lg ">
                        2 baths
                    </span>
                </div>
                <button className='bg-[#005555] py-4 px-4 rounded-full text-white flex justify-center items-center ' >
                    See details
                </button>
            </div>

        </>
    )
}

export default CardText