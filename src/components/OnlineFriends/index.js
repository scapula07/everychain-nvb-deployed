import React from 'react'
import {FaUserAlt} from "react-icons/fa"


export default function OnlineFriends() {
  return (
    <div className='fixed '>
        <div className='flex flex-col items-center'>
           <main className='bg-purple-900 p-2 rounded-full'>
              <FaUserAlt className='text-2xl'/>
           </main>
        </div>
    </div>
  )
}
