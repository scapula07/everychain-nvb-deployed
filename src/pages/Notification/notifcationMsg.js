import React from 'react'
import {AiFillAlert} from "react-icons/ai"
import streampic from "../../assests/streampic.webp"

export default function NotificationMsg({notification}) {
  return (
      <div className='px-4 flex bg-purple-900 py-4 justify-between items-center'>
         <main className='flex items-center space-x-8'>
          <h5 className='bg-purple-800 p-1 rounded-full flex jsutify-center'><AiFillAlert /></h5>

          <main className="flex space-x-4 ">
            <img src={notification.icon} className="rounded-full h-8 w-8"/>
            <h5 className='flex flex-col'>
                <span className='text-sm font-semibold'>{notification?.notification?.title}</span>
                <span className='text-xs font-thin'>{"5 minutes ago"}</span>
            </h5>
          </main>

         </main>

         <main className='flex space-x-6 items-center'>
            <button className='bg-purple-800  text-sm  px-4 py-1 rounded-md'>View</button>
            <button className='bg-rose-900 text-sm  px-4 py-1 rounded-md'>Delete</button>
        </main>
        
        
        </div>
  )
}
