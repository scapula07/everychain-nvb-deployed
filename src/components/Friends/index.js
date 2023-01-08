import React from 'react'
import {FiSearch} from "react-icons/fi"
import {BsThreeDotsVertical} from "react-icons/bs"



function SearchBox() {
    return (
  
      <div className='flex items-center space-x-4'> 
         <FiSearch className='text-purple-600 text-xl'/>
         <input  className='border-l bg-purple-900  outline-none text-xs px-4 text-white-600 border-purple-600'
           placeholder='Search friends'
         />
          
      </div>
    )
  }

export default function Friends() {
  return (

    <div>
        <SearchBox />
        <div className='py-4'>
            <h5 className='flex justify-between'>
                <span className='text-sm'>Friends</span>
                <BsThreeDotsVertical />
            </h5>
        </div>
    </div>
  )
}
