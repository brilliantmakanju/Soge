
import React from 'react'
import Avatar from './Avatar'
import TopInfo from './TopInfo'
import Info from './Info'

const Card = ({ info }) => {
  return (
    <div className='flex w-full py-5 px-2 xl:px-6 flex-col justify-center items-start gap-20' >
      <div className={` ${info ? "" : "hidden"} flex lg:px-5 xl:px-10 flex-col md:flex-row justify-center w-full items-center gap-5 md:gap-12 lg:gap-10 xl:gap-20`}>
        <Avatar />
        <TopInfo />
      </div>
      <Info info={info} />
    </div>
  )
}

export default Card