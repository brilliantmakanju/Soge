'use client'
import Forms from './Password/Form'
import { useSession } from 'next-auth/react'

const PassChange = () => {
    const { data: session, update } = useSession()
    return (
        <div className='flex w-full lg:w-[60%] lg:shadow-lg lg:border-[4px] lg:rounded-md lg:border-[#005555]  flex-col justify-start items-center' >
            <Forms session={session} />
        </div>
    )
}

export default PassChange