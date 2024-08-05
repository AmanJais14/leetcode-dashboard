import React from 'react'
import leetcodeImage from './leetcode.png';
import { CiBellOn } from "react-icons/ci";
import { RiFireLine } from "react-icons/ri";

function Navbar() {
  return (
    <div className='flex justify-between px-10 py-3 bgCards'>
        <ul className='flex text-zinc-400 gap-10 '>
            <img className = 'h-6 w-6' src={leetcodeImage} alt="" />
            <li className='hover:text-zinc-100 cursor-pointer'>Explore</li>
            <li className='hover:text-zinc-100 cursor-pointer'>Problems</li>
            <li className='hover:text-zinc-100 cursor-pointer'>Contest</li>
            <li className='hover:text-zinc-100 cursor-pointer'>Discuss</li>
            <li className='hover:text-zinc-100 cursor-pointer'>Interview</li>
            <li className='hover:text-zinc-100 cursor-pointer'>Store</li>
        </ul>
        <ul className='flex text-zinc-400 gap-5'>
            <li className='hover:text-zinc-100 cursor-pointer text-2xl'><CiBellOn/></li>
            <li className='hover:text-zinc-100 cursor-pointer text-xl'><RiFireLine /></li>
            <li className='w-6 bg-zinc-900 rounded-full'><img src={leetcodeImage} alt="" /></li>
            <button className='py-[5px] px-[16px] text-xs rounded bg-amber-900 text-yellow-300 hover:bg-amber-700 cursor-pointer'>Premium</button>
        </ul>
    </div>
  )
}

export default Navbar