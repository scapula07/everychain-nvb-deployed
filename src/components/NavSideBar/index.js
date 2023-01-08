import React from 'react'
import {BsFillGrid3X3GapFill} from "react-icons/bs"
import {TiVideo} from "react-icons/ti"
 import {BsPeople,BsChatDots} from "react-icons/bs"
import {MdPersonOutline,MdOutlineVideoLibrary,MdOutlineLightMode} from "react-icons/md"
import {AiFillHome} from "react-icons/ai"
import {AiOutlineHistory} from "react-icons/ai"
import {RiMoonFill,RiVideoAddFill} from "react-icons/ri"
import {GiTeacher} from "react-icons/gi"


export default function NavSideBar() {
  return (
    <div className='flex  space-y-14 flex-col justify-center fixed '>
         <div>
           <h5 className='flex flex-col'>
            <span className=' px-2 font-semibold text-sm text-red-400' >Every</span>
            <span className='font-bold text-lg'>Chain </span>
           
           </h5>

           <div className=' space-y-14 mt-9 flex flex-col justify-center items-center w-full'>
              <main className='bg-rose-900 rounded-full flex justify-center p-2 '>
                 <BsFillGrid3X3GapFill className='text-xl'/>
              </main>

               <main className=' bg-purple-900 py-4 space-y-8 px-4 flex flex-col rounded-full '>
                  <RiVideoAddFill className='text-2xl' />
                  <BsPeople  className='text-2xl'/>
                  <BsChatDots  className='text-2xl'/>
                  <GiTeacher  className='text-2xl' />
               </main>

               <main className='flex flex-col  space-y-4'>
                <MdOutlineVideoLibrary  className='text-2xl'  />
                  <AiOutlineHistory className='text-2xl' />
                  <AiFillHome className='text-2xl'/>
               </main>

           </div>

         </div>

          <div className=' bg-purple-900 py-4 space-y-6 flex flex-col justify-center items-center w-full rounded-full ' >
            <MdOutlineLightMode />

            <main className='bg-white p-1 rounded-full flex justify-center'>
              <RiMoonFill className='text-rose-900 ' />
            </main>
         </div>

    </div>
  )
}
