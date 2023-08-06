
import Table from '@/app/components/Table'
import Card from '@/app/components/profile/Card'
import React from 'react'

const page = () => {
  return (
    <section className='w-full h-auto xl:container xl:mx-auto  pt-[6em] flex flex-col justify-start items-start px-3 gap-4 ' >
            {/* <Card  /> */}
            <Table />
        </section>
  )
}

export default page