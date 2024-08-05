import React from 'react'
import ranks from './ranks.png'

function Top() {
  return (
    <div className=' mt-10 bgCards mr-9 py-4 px-1 rounded-e-lg'>
        <h1>Top</h1>
        <h1 className='text-zinc-100 text-3xl'>39.07%</h1>
        <img className=' ' src={ranks} alt="" />
    </div>
  )
}

export default Top