import React from 'react'
import profile from './profile2.jpg'
import { CiLocationOn } from "react-icons/ci";
import { IoSchoolSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { CiShoppingTag } from "react-icons/ci";
import Community from './Community';

function Profile() {
    const obj = ["India","CMR University","AmanJais14","jais_aman7","aman-jaiswal-014"];
    const icons =[<CiLocationOn/>,<IoSchoolSharp/>,<FaGithub/>,<CiTwitter/>,<FaLinkedinIn/>]
    const skills =["html","css","javascript","java","python","nodejs","expressjs","mongodb"];
  return (
    <div>
        <div className='bgCards mt-10 mx-8 rounded-lg min-w-[260px]'>
            <div className=' py-6 px-5 flex flex-wrap gap-2 ' >
                <img className='w-20 rounded-lg' src={profile} alt="" />
                <div className='relative'>
                    <h1 className='text-base text-zinc-200 font-semibold'>Aman Jaiswal</h1>
                    <p className='text-xs'>ajamanjaiz14</p>
                    <div className='absolute bottom-0 flex gap-2'>
                        <span >Rank</span>
                        <span className='text-zinc-200 font-semibold'>222,731</span>
                    </div>
                </div>
            </div>
            <div className='mx-3 '>
                <button className='w-full bg-[#2CBB5D1F] text-[#2CBB5D] cursor-pointer rounded-md text-sm p-1'>Edit Profile</button>
            </div>
            <div className='mx-2 mt-3 mb-4'> {obj.map((item, index) => (
                        <div  key={index} className='flex items-center gap-2 mt-4'>
                            {icons[index]} {/* Display the corresponding icon */}
                            <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>{item}</a>
                        </div>
                    ))}
            </div>
            <div>
                <div className='ml-2 flex flex-wrap'>
                    <CiShoppingTag/>
                    {skills.map((skill,index) => {
                        return <button className="bg-zinc-700 text-zinc-100 ml-1 mr-2 text-xs p-1 rounded-xl mb-1 cursor-text" key={index}>{skill}</button>
                    })}
                </div>
                <hr className='mt-5 mx-5 mb-4 opacity-20'/>
                
            </div>
            <div>
                <Community/>
            </div>
            
        </div>
    </div>
  )
}

export default Profile