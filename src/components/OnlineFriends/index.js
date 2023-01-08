import React from 'react'
import {FaUserAlt} from "react-icons/fa"
import { Link } from 'react-router-dom'


export default function OnlineFriends() {
  return (
    <div className='fixed '>
        <div className='flex flex-col items-center'>
           <main className='bg-purple-900 p-2 rounded-full'>
           <Link to="/user">  <FaUserAlt className='text-2xl'/> </Link>
           </main>
        </div>
    </div>
  )
}
