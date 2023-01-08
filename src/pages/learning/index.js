import React from 'react'
import landingImg from "../../assests/landingimg.avif"
import TutorList from './tutorlist'
import {BiFilter} from "react-icons/bi"
import { Link,Outlet } from "react-router-dom"


export default function Learning() {
  return (
    <div>
        <main className='flex items-center space-x-8 '>

            <h5 className='flex bg-purple-700 items-center space-x-1  px-4 py-1 rounded-sm text-slate-200 text-sm'>All</h5>
            <h5 className='flex bg-purple-700 items-center space-x-1  px-4 py-1 rounded-sm text-slate-200 text-sm'>Solidity</h5>
            <h5 className='flex bg-purple-700 items-center space-x-1  px-4 py-1 rounded-sm text-slate-200 text-sm'>Ethereum</h5>
            <h5 className='flex bg-purple-700 items-center space-x-1  px-4 py-1 rounded-sm text-slate-200 text-sm'>Algorand</h5>
            <h5 className='flex bg-purple-700 items-center space-x-1  px-4 py-1 rounded-sm text-slate-200 text-sm'>Polygon</h5>
            <h5 className='flex bg-purple-700 items-center space-x-1  px-4 py-1 rounded-sm text-slate-200 text-sm'>Pyteal</h5>
            <h5 className='flex bg-purple-700 items-center space-x-1  px-4 py-1 rounded-sm text-slate-200 text-sm'>NEAR</h5>
            <h5 className='flex bg-purple-700 items-center space-x-1  px-4 py-1 rounded-sm text-slate-200 text-sm'>Rust</h5>
        </main>

       <div className=' flex  space-x-10 pt-10'>
          <div className=' w-3/5' >
          <main className='   relative'>
            <div className="bg-black rounded-xl opacity-80  z-10 inset-0">
                <img  src={landingImg}  className="h-64 rounded-xl"/>
                
                <div className='-mt-20 relative  px-4'>
                    <h5 className='font-semibold text-2xl text-purple-700 '> 
                        Learn medicine anywhere
                        <br></br>
                        with the right tutor.

                    </h5>
                 </div>
              </div>

            </main>
          </div>
            <main className=' w-2/5'>
               <div className=' bg-purple-900 h-64  px-8 py-8 rounded-lg'>
                   <h5 className='font-semibold text-xl'>Top tutors</h5>
               </div>
            </main>

       </div>


       <div className='pt-10'>
           <main className='flex justify-between items-center'>
              <h5 className='text-lg font-thin'>Trending</h5>
              <h5 className='text-lg font-thin'>View All</h5>
           </main>
          
        <main className='flex pt-6 justify-between items-center'>
            <div className='flex bg-purple-900 items-center py-0.5  w-3/4 justify-evenly rounded-lg '>
            <Link to="/learn/tutors">    <h5 className='text-sm font-semibold'>Hire instructors</h5> </Link>
            <Link to="/learn/programs">   <h5 className='text-sm'>Programs/Bootcamps</h5>   </Link>
            <Link to="/learn/courses">    <h5 className='text-sm'> Courses</h5> </Link>
            <Link to="/learn/communities/server/Encode">     <h5 className='text-sm'> Communities</h5></Link>
            </div>
             <div className='flex items-center space-x-1 px-2 py-1 rounded-full bg-purple-900'>
                <BiFilter className='text-xl'/>
                <h5 className='text-sm'>Filter</h5>
            </div>

        </main>
         
       </div>

        <div className='pt-4'>
           <Outlet  />
        </div>

    </div>
  )
}
