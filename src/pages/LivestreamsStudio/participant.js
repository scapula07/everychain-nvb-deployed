import React from 'react'
import streampic from "../../assests/streampic.webp"
import {CiCircleInfo,CiMicrophoneOn,CiVideoOn} from "react-icons/ci"



export default function Participant({name,location}) {
  return (
    <div className='flex items-center justify-between  px-2 py-1 border-b border-purple-600'>
        <main className='flex items-center space-x-1'>
            <img src={streampic} className="h-6 w-6 rounded-full"/>
            <h5 className='flex flex-col text-xs'>
                <span>{name}</span>
                <span>{location}</span>
            </h5>

        </main>
        <main className='flex items-center space-x-1 '>
            <CiMicrophoneOn className=' ' />
            <CiVideoOn className='' />
            <CiCircleInfo  className=' '/>
        </main>
    </div>
  )
}
