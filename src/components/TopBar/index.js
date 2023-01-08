import React from 'react'
import { Link } from 'react-router-dom'
export default function TopBar() {
  return (
    <div className='flex justify-center py-4'>
        <div className='flex bg-purple-700 items-center py-0.5  w-3/4 justify-evenly rounded-lg '>
        <Link to="/videos">    <h5 className='text-sm font-semibold'>Live stream</h5></Link>
        <Link to="/profiles">    <h5 className='text-sm font-semibold'>Profiles</h5></Link>

            <h5 className='text-sm font-semibold'>Top streamers</h5>
        </div>

    </div>
  )
}
