import React from 'react'
import LandingPropertHeader from './Header'
import Properties from './Properties'

const Property = () => {
  return (
    <section className="w-full h-auto flex flex-col gap-12  px-2 py-10  lg:px-[5em] lg:py-[5em] xl:container xl:mx-auto  " >
        <LandingPropertHeader />
        <Properties />
    </section>
  )
}

export default Property