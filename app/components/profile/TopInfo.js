'use client'
import { useSession } from 'next-auth/react'
import Header from '../Header'
import Link from 'next/link'
import { Skeleton } from '@mui/material'

const TopInfo = () => {

  const { data: session, status } = useSession()

  return (
    <>
      {
        status === "loading"
          ?
          <div className='flex flex-col justify-start w-full md:w-[70%] items-start ' >
            <Skeleton width="40%" height="80px" />
            <Skeleton width="100%" height="130px" />
            <Skeleton width="20%" height="50px" />
          </div>
          :
          <div className='flex justify-between w-full md:w-[70%] items-center ' >
            <div className='flex flex-col justify-start w-full items-start ' >
              <Header style={" flex  justify-center items-center font-bold text-[30px]  lg:text-[35px] text-[#00204A] "} value={session?.user?.name} />
              <span className='text-[16px]  ' >SogeKing is the best place to buy and rent your dream home throughout IndonesiaSogeKing is the best place to buy and rent your dream home throughout Indonesia</span>
              Role: {session?.user?.role}
              <Link href={'/user/profile/settings'} className='flex p-3 mt-3 rounded-full hover:bg-[#005555] hover:text-[white] px-8 bg-[#00204A] text-white duration-300 transition ease-in-out ' >
                Update
              </Link>
            </div>
          </div>

      }
    </>
  )
}

export default TopInfo