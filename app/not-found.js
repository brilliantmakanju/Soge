import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <section className='flex flex-col gap-4  min-h-screen justify-center lg:px-10 xl:px-20 items-center py-[9rem] w-full' >
      <Image src="/error.svg" alt="error" width={900} height={900} />
      <Link
        className="rounded-md bg-[#005555] text-white w-[250px]  text-center p-4 py-3 mb-3 font-bold disabled:bg-neutral-900 disabled:cursor-not-allowed disabled:opacity-30  "
        href="/"
      >
        Home
      </Link>
    </section>
  )
}



export default NotFoundPage