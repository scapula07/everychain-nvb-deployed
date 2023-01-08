import React from 'react'
import Avater from "../../assests/avater.webp" 


export default function Message({message}) {
  return (
    <div className='flex space-x-4 '>
    <img src={ Avater} className="h-8 w-8 rounded-full"/>
    <main className='flex flex-col space-y-4'>
       <h5 className='text-xs flex space-x-6 font-thin'>
        <span className='font-semibold'>{"John wad"}</span>
        <span>{"5 minutes ago"}</span>
        </h5>
       <p className='text-sm font-semibold'>
          {message}
       </p>
    </main>
  
</div> 
  )
}
