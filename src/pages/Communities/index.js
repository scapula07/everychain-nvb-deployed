import React,{useState} from 'react'
import JoinList from './joinList'
import "./communities.css"
import {FiMenu} from "react-icons/fi"
import Channels from './Channels'
import { Link,Outlet } from 'react-router-dom'

export default function Communities() {
      const [trigger,setTrigger] =useState(false)
      const [currentRoom,setCurrentRoom] =useState("")
    return (
      <>
      <div>
          <div className='py-4'>
             <div className='flex bg-purple-900 items-center py-0.5  w-3/4 justify-evenly rounded-lg '>
                <h5 className='text-sm font-semibold'>Hire instructors</h5>
                <h5 className='text-sm'>Programs/Bootcamps</h5>
                <h5 className='text-sm'> Courses</h5>
                <h5 className='text-sm'> Communities</h5>
              </div>

          </div>
        
            <div>
             <JoinList /> 

            </div>

            <Outlet  context={[setCurrentRoom,currentRoom]}/>
      

      </div>

      {/* <ChannelModal  trigger={trigger} cname="h-3/4 w-1/4 shadow rounded-lg py-4 px-8" >

      </ChannelModal> */}

      </>
  )
}
