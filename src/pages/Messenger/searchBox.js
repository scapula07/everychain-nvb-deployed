import React from 'react'
import {FiSearch} from "react-icons/fi"
export default function SearchBox() {
  return (

    <div className='flex items-center space-x-4'> 
       <FiSearch className='text-purple-600 text-xl'/>
       <input  className='border-l bg-purple-900  outline-none text-xs px-4 text-white-600 border-purple-600'
         placeholder='Search in your inbox'
       />
        
    </div>
  )
}
