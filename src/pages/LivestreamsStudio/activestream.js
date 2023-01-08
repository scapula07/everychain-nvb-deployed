import React from 'react'
import {CiSettings} from "react-icons/ci"
import {AiOutlineExpandAlt} from "react-icons/ai"
import {RiArrowDropDownLine} from "react-icons/ri"
import {CiCircleInfo,CiMicrophoneOn,CiVideoOn} from "react-icons/ci"






export default function Activestream() {
  return (
    <div>
        <div className='bg-purple-600 px-2 py-1 flex items-center justify-between'>
           <h5 className='text-xs'>Audio & video</h5>

           <main className='flex items-center space-x-1'>
               <CiSettings />
               <AiOutlineExpandAlt />
               <RiArrowDropDownLine />
           </main>
        </div>

        <div className='pt-4 flex flex-col text-xs items-center bg-purple-900 rounded-lg px-2 pb-4'>
            <h5>Active streaming ...</h5>
            <p>Sucessfully connected to media server</p>
            <main className='flex flex-col pt-4 space-y-4'>
            <p>Please make sure you have permitted access to your camera and speaker </p>
            <h5 className='flex space-x-2 items-center justify-center'>
              <span className='bg-rose-900 rounded-full p-1'><CiMicrophoneOn className='text-lg'/></span>
              <span  className='bg-rose-900 rounded-full p-1'><CiVideoOn className='text-lg' /></span>

            </h5>
            </main>
          
        </div>

    </div>
  )
}
