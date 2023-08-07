'use client'
import ProfileUpdate from './ProfileUpdate'
import { useSession } from 'next-auth/react'

const FormCont = () => {
    const { data: session, update } = useSession()
    return (
        <div className='flex w-full lg:w-[60%] lg:shadow-lg lg:border-[4px] lg:rounded-md lg:border-[#005555]  flex-col justify-start items-center' >
            <ProfileUpdate session={session} update={update} />
        </div>
    )
}

export default FormCont