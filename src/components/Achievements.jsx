import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import badge from './badge.png'

function Achievements() {
  return (
    <div className='mt-4 ml-3 bgCards rounded-lg p-4'>
        <div className='flex items-center gap-80'>
        <h1 className='text-xs font-semibold'>Badges</h1>
        <FaArrowRight />
        </div>
        <h1 className='text-2xl text-zinc-100'>2</h1>
        <img className='ml-36 w-20' src={badge} alt="" />
        <p className='text-sm'>Most Recent Badge</p>
        <h1 className='font-semibold text-zinc-100'>50 Days Badge 2024</h1>
    </div>
  )
}

export default Achievements