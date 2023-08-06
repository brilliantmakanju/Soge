'use client'
import { Skeleton } from '@mui/material'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Avatar = () => {

    const { data: session, status } = useSession()

    return (
        <>
            {status === 'loading' ? <>
                <Skeleton animation="wave" variant="circular" width={200} height={200} />
            </> :
                <div className='relative w-[150px] h-[150px]  lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden border-[2px] border-[gray]' >
                    <Image
                        src={`${session?.user?.image}`}
                        alt={''}
                        width={900}
                        height={900}
                        className='object-cover h-full w-full'
                    />
                </div>
            }
        </>
    )
}

export default Avatar