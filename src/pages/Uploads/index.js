import React,{useState,useCallback} from 'react'
import Uploader from './uploader'
import {RiMoonFill,RiVideoAddFill} from "react-icons/ri"
import Modal from '../../components/Modal'
import {AiOutlineCloseCircle } from "react-icons/ai"
import { Link,Outlet } from "react-router-dom"
import { useCreateAsset } from '@livepeer/react';
 

import { useDropzone } from 'react-dropzone';


export default function Uploads() {

    const [contents,setContent] =useState([])
    const [trigger,setTrigger] =useState(false)

    

  return (
    <>
    <div className=''>
        <maain className="flex items-center justify-between  ">
          <h5 className='text-lg font-semibold'>Contents</h5>
         <button className='flex bg-purple-700 items-center space-x-1  px-4 py-1 rounded-sm'
            onClick={()=>setTrigger(true)}
         >
            <RiVideoAddFill  className='text-xl'/>
            <span className='text-sm'>Create</span> 
         </button>
        </maain>


        <div className='pt-14'>

            <main className='flex space-x-8 border-b py-2'>
                <h5 className='text-sm'>Videos</h5>
                <h5 className='text-sm'>Live</h5>
                <h5 className='text-sm'>Playlists</h5>

            </main>

            <main className='pt-10'>
                <Outlet />
            </main>
             

        </div>
     
     


    </div>

    <Modal  trigger={trigger} cname="h-3/4 w-3/4 shadow rounded-lg py-4 px-8">
       <main className='flex justify-between'>
          <h5 className='text-xl font-thin'>Upload videos</h5>
           <button onClick={()=>setTrigger(false)}><AiOutlineCloseCircle className="text-md font-thin" /></button>
         </main>

         <div className='flex'>
           <Uploader setTrigger={setTrigger} />

         </div>




    </Modal>
    </>
  )
}
