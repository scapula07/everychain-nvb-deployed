import React from 'react'
import {FiVideo} from "react-icons/fi"

export default function StreamingBtn() {
  return (
    <div className='bg-purple-900 flex items-center  space-x-2 rounded-full px-4 py-1'>
       <main className='rounded-full flex-center p-2 bg-rose-800 '>
         <FiVideo  className='text-sm'/>
       </main>

       <h5 className='text-xs'>Start Stream</h5>

    </div>
  )
}
