import React from 'react'
import { FaEye } from "react-icons/fa";
import { IoIosCheckbox } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";

function Community() {
  const obj =["Views 7", "Solution 4","Discuss 0","Reputation 0"];
  const icons = [<FaEye color='blue'/>,<IoIosCheckbox/>,<IoChatbubblesOutline/>,<FaRegStar color='yellow'/>]

  return (
    
    <div className='ml-2'>
        <h1>Community Stats</h1>
        <ul>
        {obj.map((obj, ind) => (
          <div className='my-4'>
            <div className='flex gap-2 items-center'>
             {icons[ind]}
             <li key = {ind} className='hover:cursor-text'>{obj}</li>
          </div>
          <p className='text-xs ml-6'>Last week</p>
          </div> 
        ))}
        </ul>
        
    </div>
  )
}

export default Community
